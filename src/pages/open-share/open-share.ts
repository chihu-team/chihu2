import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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
  isIdark;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get('_id');
    this.getdata();
    this.isIdark = this.UserService.isIdark;
}

  getdata() {
    let url = "https://www.devonhello.com/chihu2/share_dec";

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

    let url = "https://www.devonhello.com/chihu2/get_comment";

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
