import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkDataProvider } from '../../providers/work-data/work-data';

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

  constructor(public WorkService: WorkDataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  //继续
  next() {
    this.WorkService._title = this.title;
    //alert(this.WorkService._title);
    this.navCtrl.push('SendWorkPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendWorkTypePage');
  }

}
