import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-hot-answer',
  templateUrl: 'hot-answer.html',
})
export class HotAnswerPage {

  @ViewChild(Content) content: Content;
  data: any = [];
  isIdark

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
    this.isIdark = this.UserService.isIdark;
  }

  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/hot_answer";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=0" + "&len=" + this.data.length, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.data = this.data.concat(res.json());
      });
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
