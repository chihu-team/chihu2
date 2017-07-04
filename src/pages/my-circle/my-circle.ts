import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the MyCirclePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-circle',
  templateUrl: 'my-circle.html',
})
export class MyCirclePage {

  data: any = [];

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getforkdata();
  }

  //获取关注的分享
  getforkdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/getmyforkshare";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        console.log(this.data);
        this.data = res.json();
      });
  }

}
