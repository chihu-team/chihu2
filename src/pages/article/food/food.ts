import { Component, Input, Output } from '@angular/core';
import { UserServiceProvider } from '../../../providers/user-service/user-service';
/**
 * Generated class for the FoodComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'food',
  templateUrl: 'food.html'
})
export class FoodComponent {

  @Input() data:any = {};
  isIdark;

  constructor(public UserService: UserServiceProvider) {
    this.isIdark = this.UserService.isIdark;
  }

}
