import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetailsPage {

  user: any = {}
  isfork: boolean = false;
  isme: boolean = true;
  _id;
  rootNavCtrl: NavController;
  isIdark;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.user = this.UserService._user;
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this._id = this.navParams.data._id;
    if (this.UserService._user._id && this._id == this.UserService._user._id) {
      this.isme = true;
    } else {
      this.isme = false;
    }

    this.getdata();
  }

  getdata() {

    let url = "https://www.devonhello.com/chihu2/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.user = res.json()[0];
        if (this.UserService._user._id && !this.isme) {
          this.checkfork();
        } else {
          this.UserService.presentLoadingDismiss();
        }
      });
  }

  //检查是否已经关注
  checkfork() {

    this.isfork = this.UserService.checkisfork(this._id);
    this.UserService.presentLoadingDismiss();
  }

  //关注
  fork() {

    if (!this.UserService._user._id) {
      this.rootNavCtrl.push('LoginPage');
      return true;
    }
    this.checkfork();
    if (this.isfork) {
      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "https://www.devonhello.com/chihu2/forkuser";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.user['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.user['userimg'], {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()) {
          this.isfork = true;
          this.UserService.get_fork_user();
        }
      });

  }

  //取消关注
  disfork() {
    this.checkfork();
    if (!this.isfork) {
      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "https://www.devonhello.com/chihu2/disfork_user";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this._id + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.isfork = false;
        this.UserService.get_fork_user();
      });

  }

  baseic() {
    alert(1);
  }

}
