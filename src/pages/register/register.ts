import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: any = '';
  nickname: any = '';
  pass: any = '';
  userdata: any = null;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  regist() {

    if (this.name.length < 1 || this.pass.length < 1 || this.nickname.length < 1) {

      return true;
    }

    let url = "http://www.devonhello.com/chihu2/register";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass + "&nickname=" + this.nickname, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()[0]['_id']) {
          this.userdata = res.json()[0];
          this.UserService.setUser(this.userdata);
          this.navCtrl.popToRoot();
        } else {

          alert("注册失败，账号可能已存在");
        }
      });
  }


}
