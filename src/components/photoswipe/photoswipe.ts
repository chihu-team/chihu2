import { Component, Input } from '@angular/core';

/**
 * Generated class for the PhotoswipeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
declare var PhotoSwipe: any;
declare var PhotoSwipeUI_Default: any;
@Component({
  selector: 'photoswipe',
  templateUrl: 'photoswipe.html'
})
export class PhotoswipeComponent {

  //PhotoSwipeUI 的dom对象存储
  pswpElement = null;
  //PhotoSwipe对象存储
  gallery: any = null;

  @Input() data:any = {};

  constructor() {
    
  }

}
