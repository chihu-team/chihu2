import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

/**
 * Generated class for the NoticeInformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notice-inform',
  templateUrl: 'notice-inform.html',
})
export class NoticeInformPage {

  items = [];
  rootNavCtrl: NavController;
  nomessage: boolean = true;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  //获取数据
  getdata() {

    if (!this.UserService._user._id) {
      //未登录
      this.items = [];
      return true;
    }

    let url = "http://www.devonhello.com/chihu/getinform";

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

  //打开文章
  pushPages(type, _id) {
    switch (type) {
      case '1':
        this.rootNavCtrl.push('ArticlePage', {
          _id: _id
        });
        break;
      case '2':
        this.rootNavCtrl.push('AnswerPage', {
          _id: _id
        });
        break;
      case '3':
        this.rootNavCtrl.push('OpenSharePage', {
          _id: _id
        });
        break;
      default:
        break;
    }
  }

  ionViewDidEnter() {
    this.getdata();
  }

}
