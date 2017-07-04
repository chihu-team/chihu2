import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'work',
  templateUrl: 'work.html'
})
export class WorkComponent {

  @Input() data: any = {};

  irootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.irootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  //打开回答
  pushAnswerPage(_id) {
    this.irootNavCtrl.push('AnswerPage', {
      _id: _id
    });
  }

  //打开问题
  pushQuestionPage(_id) {
    this.irootNavCtrl.push('QuestionPage', {
      _id: _id
    });
  }

}
