import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-notice-fork',
  templateUrl: 'notice-fork.html',
})
export class NoticeForkPage {

  //数据存储
  items = [];
  rootNavCtrl: NavController;
  //是否有消息class控制
  nomessage: boolean = true;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  ionViewDidEnter() {
    this.getdata();
  }

  //获取数据
  getdata() {

    if (!this.UserService._user._id) {
      //未登录
      this.items = [];
      return true;
    }

    let url = "https://www.devonhello.com/chihu2/getfork";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        if (res.json().length != '0') {
          this.nomessage = false;
        }
      });
  }

  //查看TA的个人主页
  pushPerson(_id) {
    this.rootNavCtrl.push('PersonalPage', {
      _id: _id
    });
  }

}
