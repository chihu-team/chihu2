import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  @Input() data:any = {};

  constructor( public navCtrl: NavController ) {
    
  }

  //打开作品
  pushArticlePage( _id ){
    this.navCtrl.push('ArticlePage', {
      _id: _id
    });
  }

  //打开回答
  pushAnswerPage( _id ){
    this.navCtrl.push('AnswerPage', {
      _id: _id
    });
  }

  //打开问题
  pushQuestionPage( _id ){
    alert( _id );
  }

}
