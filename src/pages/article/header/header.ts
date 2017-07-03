import { Component, Input, Output, OnChanges } from '@angular/core';
import { UserServiceProvider } from '../../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnChanges {

  @Input() data: any = {};
  //是否关注
  ishide: boolean = true;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {

  }

  ngOnChanges(ch) {

    try {
      if (ch['data'].currentValue && ch['data'].currentValue.uid) {
        //console.log( ch['data'].currentValue.uid );
        this.checkfork();
      }
    } catch (error) {

    }

  }

  //关注
  fork() {

    if (this.UserService._user._id != this.data['uid'] && this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu2/forkuser";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&uname=" + this.data['name'] + "&userimg=" + this.UserService._user.userimg + "&uuserimg=" + this.data['userimg'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {
            this.ishide = true;

          }
        });
    } else {
      if (this.UserService._user._id) {
        return true;
      }
      this.navCtrl.push("LoginPage");
    }
  }

  //查看TA的个人页面
  pushPersonPage(_id) {
    this.navCtrl.push('PersonalPage', {
      _id: _id
    });
  }

  //检查是否已经关注
  checkfork() {

    if (this.UserService._user._id != this.data['uid'] && this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu2/checkfork";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id, {
        headers: headers
      })
        .subscribe((res) => {
          console.log(res.json());
          if (res.json().length != "0") {
            this.ishide = false;
          }
        });
    }

  }

  //取消关注
  unfork() {
    let url = "http://www.devonhello.com/chihu2/unforkuser";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == 1) {
          this.ishide = true;

        }
      });
  }

}
