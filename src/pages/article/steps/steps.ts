import { Component, Input, OnChanges } from '@angular/core';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

/**
 * Generated class for the StepsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
declare var document: any;
@Component({
  selector: 'steps',
  templateUrl: 'steps.html'
})
export class StepsComponent implements OnChanges {

  @Input() data: any = {};

  //PhotoSwipeUI 的dom对象存储
  pswpElement = null;
  //PhotoSwipe对象存储
  gallery: any = null;

  items: any = [];

  constructor(public UserService: UserServiceProvider) { }

  ngOnChanges(ch) {

    try {
      if (ch['data'].currentValue && ch['data'].currentValue.work) {

        var len = this.data.work.length;

        for (var i = 0; i < len; i++) {
          if (this.data["work"][i]["src"].length > 5) {
            var objs = {};
            objs["src"] = this.data["work"][i]["src"];
            objs["w"] = this.data["work"][i]["width"];
            objs["h"] = this.data["work"][i]["height"];
            objs["title"] = "步骤 " + (i + 1) + "：" + this.data["work"][i]["text"];
            this.items.push(objs);
          }

        }
      }
    } catch (error) { }

  }

  //查看步骤图
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
