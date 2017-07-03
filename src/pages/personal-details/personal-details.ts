import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {

  user: any = {}
  ishide: boolean = false;
  isme: boolean = true;
  _id;
  rootNavCtrl: NavController;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.user = this.UserService._user;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this._id = this.navParams.data._id;
    if (this.UserService._user._id && this._id == this.UserService._user._id) {
      this.isme = true;
    } else {
      this.isme = false;
      this.ishide = false;
    }

    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu2/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.user = res.json()[0];
        if (this.UserService._user._id) {
          this.checkfork();
        } else {

        }
      });
  }

  //检查是否已经关注
  checkfork() {

    let url = "http://www.devonhello.com/chihu2/checkfork";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != "0") {
          this.ishide = true;
        }

      });
  }

  //关注
  fork() {

    if (!this.UserService._user._id) {
      this.rootNavCtrl.push('Login');
      return true;
    }

    if (this.ishide) {

    } else {

      let url = "http://www.devonhello.com/chihu2/forkuser";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.user['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.user['userimg'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {
            this.ishide = true;

          }
        });
    }

  }

  //取消关注
  disfork() {

    let url = "http://www.devonhello.com/chihu2/disfork_user";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {

        this.ishide = false;
      });

  }

  baseic(){
    alert(1);
  }

}
