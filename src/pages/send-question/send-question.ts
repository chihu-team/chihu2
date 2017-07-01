import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the SendQuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-send-question',
  templateUrl: 'send-question.html',
})
export class SendQuestionPage {

  title = '';
  text = '';

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  send() {
    if (this.title.length && this.text.length) {
      this.postdata();
    } else {
      alert("请输入完整...");
    }
  }

  postdata() {

    let url = "http://www.devonhello.com/chihu/send_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.title + "&text=" + this.text, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == '1') {

          this.navCtrl.pop();
        }

      });
  }

  ionViewWillLeave() {
    //this.UserService.presentLoadingDismiss();
  }

}
