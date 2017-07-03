import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the HotAnswerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hot-answer',
  templateUrl: 'hot-answer.html',
})
export class HotAnswerPage {

  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }

  //获取数据
  getdata() {

    let url = "http://www.devonhello.com/chihu2/hot_answer";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=0", {
      headers: headers
    })
      .subscribe((res) => {
        this.data = this.data.concat(res.json());

      });
  }


}
