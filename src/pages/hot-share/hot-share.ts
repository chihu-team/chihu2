import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the HotSharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hot-share',
  templateUrl: 'hot-share.html',
})
export class HotSharePage {

  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu/hot_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "", {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotSharePage');
  }

}
