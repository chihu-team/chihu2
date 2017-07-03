import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name: '';
  pass: '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public UserService: UserServiceProvider, public http: Http) {
  }

  login() {

    if (!this.name || !this.pass) {
      return true;
    }

    let url = "http://www.devonhello.com/chihu2/login";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()[0]['_id']) {
          this.UserService.setUser(res.json()[0]);
          this.navCtrl.pop();
        }
      });
  }

  //注册
  regist() {
    this.navCtrl.push('RegisterPage');
  }

}
