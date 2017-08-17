import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../../providers/user-service/user-service';
/**
 * Generated class for the QuestionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  @Input() data:any = {};
  isIdark;

  constructor(public UserService: UserServiceProvider, public navCtrl: NavController) {
    this.isIdark = this.UserService.isIdark;
  }

  //打开问题
  pushQuestionPage( _id ){
    this.navCtrl.push('QuestionPage', {
      _id: _id
    });
  }

}
