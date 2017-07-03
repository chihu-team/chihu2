import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  Version = '';
  ishide: boolean = true;

  constructor(public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.Version = this.UserService.Version;
    if (this.UserService._user._id) {
      this.ishide = false;
    }
  }

  out() {
    this.UserService.clearStorage();
    this.navCtrl.pop();
  }

}
