import { Component, Input, OnChanges } from '@angular/core';
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
export class WorkComponent implements OnChanges {

  @Input() data: any = {};
  @Input() ishideTitle: boolean = false;
  @Input() rootNavCtrl: any = null;

  irootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.irootNavCtrl = this.navCtrl;
  }

  ngOnChanges(ch) {

    try {
      if (ch['rootNavCtrl'].currentValue) {
        //console.log( ch['data'].currentValue.uid );
        if (this.rootNavCtrl != null) {
          this.irootNavCtrl = this.navParams.get('rootNavCtrl');
        }
        this.ishideTitle = ch['ishideTitle'].currentValue;
      }
    } catch (error) {

    }

  }

  //打开作品
  pushArticlePage(_id) {
    this.irootNavCtrl.push('ArticlePage', {
      _id: _id
    });
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
