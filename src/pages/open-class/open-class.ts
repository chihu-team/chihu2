import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpenClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-open-class',
  templateUrl: 'open-class.html',
})
export class OpenClassPage {

  iclass:any = '分类';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iclass = this.navParams.get('class');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenClassPage');
  }

}
