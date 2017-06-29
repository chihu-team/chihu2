import { Component, Input } from '@angular/core';

/**
 * Generated class for the StepsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'steps',
  templateUrl: 'steps.html'
})
export class StepsComponent {

  @Input() data:any = {};

  constructor() {
    
  }

}
