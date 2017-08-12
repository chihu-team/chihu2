import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name: '';
  pass: '';

  constructor(public navCtrl: NavController, public navParams: NavParams,public UserService: UserServiceProvider, public http: Http, public alertCtrl: AlertController) {
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
    let alert = this.alertCtrl.create({
      title: '吃乎提示!',
      subTitle: '请前往【吃乎官网】进行注册，http://www.devonhello.com/chihu',
      buttons: ['确定']
    });
    alert.present();
    //this.navCtrl.push('RegisterPage');
  }

}
