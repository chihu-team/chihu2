import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SendCommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var $: any;
@IonicPage()
@Component({
  selector: 'page-send-comments',
  templateUrl: 'send-comments.html',
})
export class SendCommentsPage implements OnInit {

  summernote: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    var _that = this;
    this.summernote = $('#summernote');
    this.summernote.summernote(
      {
        height: 380,
        placeholder: '文章内容...',
        callbacks: {
          onImageUpload: function (files) { //the onImageUpload API  
            var imgs = _that.upFile(files[0]);
          }
        },
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['bold', 'italic']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['Insert', ['picture']]
        ]
      }
    )
  }

  upFile(file) {
    var _data = new FormData(),
      _that = this;
    _data.append("file", file);
    
    $.ajax({
      data: _data,
      dataType: 'text',
      type: "POST",
      url: "http://www.devonhello.com/cfdkAdmin/uploadimg",
      cache: false,
      contentType: false,
      processData: false,
      success: function (url) {
        
        _that.summernote.summernote('insertImage', "http://7xp2ia.com1.z0.glb.clouddn.com/" + url, 'image name'); // the insertImage API  
      }
    });
  }

  send() {

    alert(this.summernote.summernote('code'));
  }

}
