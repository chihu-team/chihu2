import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-fork-question',
  templateUrl: 'fork-question.html',
})
export class ForkQuestionPage {

  data: any = [];
  rootNavCtrl: NavController;
  uid;
  isIdark;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    if (this.navParams.get('id')) {
      this.uid = this.navParams.get('id');
    } else {
      this.uid = this.UserService._user._id;
    }
    this.getdata();
  }

  //关注的问题
  getdata() {

    let url = "https://www.devonhello.com/chihu2/getforkquestion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();
      });
  }

  //打开问题
  pushQuestionPage( _id ){
    this.rootNavCtrl.push('QuestionPage', {
      _id: _id
    });
  }

}
