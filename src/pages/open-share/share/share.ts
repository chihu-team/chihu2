import { Component, Input, OnChanges } from '@angular/core';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

/**
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
declare var document: any;
@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class ShareComponent implements OnChanges {

  @Input() data:any = {};
  cont:any = 0;
  like:any = 0;
  //PhotoSwipeUI 的dom对象存储
  pswpElement = null;
  //PhotoSwipe对象存储
  gallery: any = null;

  items: any = [];

  constructor(public UserService: UserServiceProvider) {
    
  }

  ngOnChanges(ch) {

    try {
      if (ch['data'].currentValue && ch['data'].currentValue.uid) {
        //console.log( ch['data'].currentValue.uid );
        this.cont = this.data.mark.cont;
        this.like = this.data.mark.like;

        var len = this.data.img.length;

        for (var i = 0; i < len; i++) {
          if (this.data["img"][i]["src"].length > 5) {
            var objs = {};
            objs["src"] = this.data["img"][i]["src"];
            objs["w"] = this.data["img"][i]["width"];
            objs["h"] = this.data["img"][i]["height"];
            objs["title"] = this.data["text"];
            this.items.push(objs);
          }

        }
      }
    } catch (error) { }

  }

  //查看图
  pswpElementInit(idx) {
    
    if (this.pswpElement == null) {
      this.pswpElement = document.querySelectorAll('.pswp')[0];
    }

    var _that = this;


    // define options (if needed)
    var options = {
      // optionName: 'option value'
      // for example:
      index: idx * 1 // start at first slide
    };


    // Initializes and opens PhotoSwipe
    this.gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, options);
    this.gallery.listen('close', function () {
      if (_that.UserService.isopenimg) {
        _that.UserService.isopenimg = false;
      }
    });
    this.gallery.init();
    this.UserService.galleryOBJ = this.gallery;
    this.UserService.isopenimg = true;



  }

}
