import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the MyAnswerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-answer',
  templateUrl: 'my-answer.html',
})
export class MyAnswerPage {

  //数据存储
  items = [];
  uid: any;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get('id')) {
      this.uid = this.navParams.get('id');
    } else {
      this.uid = this.UserService._user._id;
    }
    this.getdata();
  }


  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/my_answer";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.items = this.items.concat(res.json());
      });
  }

}
