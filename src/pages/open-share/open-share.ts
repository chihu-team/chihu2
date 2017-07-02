import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the OpenSharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-open-share',
  templateUrl: 'open-share.html',
})
export class OpenSharePage {

  data: any = {};
  _id;
  title = '';
  cont = 0;
  items:any = [];
  type = 3;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get('_id');
    this.getdata();
}

  getdata() {
    let url = "http://www.devonhello.com/chihu/share_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.cont = this.data.mark.cont;
        this.title = res.json()[0]['name'] + ' 分享了心情';
        this.getComment();
      });
  }

  //获取评论
  getComment() {

    let url = "http://www.devonhello.com/chihu/get_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "&artid=" + this._id + "&type=3", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        
      });
  }

}
