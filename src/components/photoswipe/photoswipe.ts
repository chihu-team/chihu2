import { Component, Input } from '@angular/core';

/**
 * Generated class for the PhotoswipeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */

@Component({
  selector: 'photoswipe',
  templateUrl: 'photoswipe.html'
})
export class PhotoswipeComponent {

  

  @Input() data:any = {};

  constructor() {
    
  }

}
