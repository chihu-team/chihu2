import { Component, Input, OnChanges } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'work',
  templateUrl: 'work.html'
})
export class WorkComponent implements OnChanges {

  @Input() data: any = {};
  @Input() ishideTitle: boolean = false;
  @Input() rootNavCtrl: any = null;

  irootNavCtrl: NavController;
  isIdark;

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserServiceProvider) {
    this.isIdark = this.UserService.isIdark;
    this.irootNavCtrl = this.navCtrl;
    this.UserService.SetIdark.subscribe((data) => {
      this.isIdark = data;
    })
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
