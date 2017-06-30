import { Component, Input, Output } from '@angular/core';

/**
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class ShareComponent {

  @Input() data:any = {};
  cont:any = 0;
  like:any = 0;

  constructor() {
    
  }

}
