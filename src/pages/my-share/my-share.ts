import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-my-share',
  templateUrl: 'my-share.html',
})
export class MySharePage {

  @ViewChild(Content) content: Content;
  data: any = [];
  uid: any;

  constructor(public http: Http, public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get("id")) {
      this.uid = this.navParams.get("id");
    } else {
      this.uid = this.UserService._user._id;
    }
    this.getdata();
  }

  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/my_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.data = res.json();
      });
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
