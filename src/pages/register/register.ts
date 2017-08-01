import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { JmessageProvider } from '../../providers/jmessage/jmessage';
/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var window;
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

  constructor(public jm: JmessageProvider, public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  regist() {

    if (this.name.length < 1 || this.pass.length < 1 || this.nickname.length < 1) {

      return true;
    }
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/register";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "name=" + this.name + "&pass=" + this.pass + "&nickname=" + this.nickname, {
      headers: headers
    }).subscribe((res) => {
        
        if (res.json()[0]['_id']) {

          this.register(res.json()[0]['nickname'] + '', res.json()[0]['_id'] + '', res);

        } else {
          this.UserService.presentLoadingDismiss();
          alert("注册失败，账号可能已存在");
        }
      });
  }

  //注册
  register(username, password, res) {
    var _that = this;
    window.JMessage.register(username, password,
      function () {
        // 注册成功。
        _that.userdata = res.json()[0];
        _that.UserService.setUser(this.userdata);
        _that.UserService.presentLoadingDismiss();
        _that.navCtrl.popToRoot();
      }, function (errorStr) {
        alert(errorStr);	// 输出错误信息。
      });
  }


}
