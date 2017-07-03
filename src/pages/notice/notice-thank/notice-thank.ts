import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

/**
 * Generated class for the NoticeNoticeThankPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notice-thank',
  templateUrl: 'notice-thank.html',
})
export class NoticeThankPage {

  items = [];
  rootNavCtrl: NavController;
  nomessage: boolean = true;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.getdata();
  }

  ionViewDidEnter() {
    this.getdata();
  }

  getdata() {

    if (!this.UserService._user._id) {
      this.items = [];
      return true;
    }

    let url = "http://www.devonhello.com/chihu2/getthank";

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

  open(artid, type) {

    switch (type) {
      case '0':
        this.rootNavCtrl.push('AnswerPage', {
          _id: artid
        });
        break;
      case '1':
        this.rootNavCtrl.push('ArticlePage', {
          _id: artid
        });
        break;
      case '2':
        this.rootNavCtrl.push('OpenSharePage', {
          _id: artid
        });
        break;
      default:
        break;
    }
  }

  pushPersonPage(_id) {

    this.rootNavCtrl.push('PersonalPage', {
      _id: _id
    });
  }

}
