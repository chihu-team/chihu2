import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the CollectAnswerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-collect-answer',
  templateUrl: 'collect-answer.html',
})
export class CollectAnswerPage {

  //数据存储
  items = [];
  rootNavCtrl: NavController;
  id;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.id = this.navParams.data._id;
    this.getdata();
  }

  //获取数据
  getdata() {

    let url = "http://www.devonhello.com/chihu/my_collect_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.id + "&type=0", {
      headers: headers
    })
      .subscribe((res) => {

        this.items = this.items.concat(res.json());
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectAnswerPage');
  }

}
