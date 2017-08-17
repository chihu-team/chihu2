import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkDataProvider } from '../../providers/work-data/work-data';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the SendWorkTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-send-work-type',
  templateUrl: 'send-work-type.html',
})
export class SendWorkTypePage {

  title = '';
  isIdark;

  constructor(public UserService: UserServiceProvider, public WorkService: WorkDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
  }

  //继续
  next() {
    this.WorkService._title = this.title;
    //alert(this.WorkService._title);
    this.navCtrl.push('SendWorkPage');
  }

}
