import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the CommentsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-comments-list',
  templateUrl: 'comments-list.html',
})
export class CommentsListPage {

  data:any = [];
  _id:any;
  type:any;
  uid:any;
  name:any;
  isget = false;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get('_id');
    this.type = this.navParams.get('type');
    this.name = this.navParams.get('name');
    this.uid = this.navParams.get('uid');
    this.getComment();
}

//获取评论
  getComment() {

    let url = "http://www.devonhello.com/chihu/get_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "&artid=" + this._id + "&type=" + this.type, {
      headers: headers
    })
      .subscribe((res) => {
        
        this.data = res.json();
        this.isget = true;
      });
  }

  ionViewDidEnter() {
    if(this.isget){
      this.getComment();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsListPage');
  }

}
