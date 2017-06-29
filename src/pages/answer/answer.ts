import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the AnswerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage {

  //头部导航动画class属性控制
  tabanimate: boolean = false;
  old_scrollTop = 0;
  //头部导航显示
  title = "回答";
  //数据存储
  data: any = {};
  //文章id
  _id;
  //关注隐藏控制属性
  ishide: boolean = true;
  iscoll: boolean = false;
  isthank: boolean = false;
  conts = 0;

  constructor(public ref: ChangeDetectorRef, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get("_id");
    this.getdata();
}

//获取文章数据
  getdata() {
    let url = "http://www.devonhello.com/chihu/answer_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.conts = this.data.mark.cont;
        
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerPage');
  }

}
