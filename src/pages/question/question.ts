import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the QuestionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  title = '';
  tabanimate: boolean = false;
  data: any = {};
  items:any = [];
  _id;

  constructor(public ref: ChangeDetectorRef, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get("_id");
    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu/question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.title = this.data['title'];
        this.getlist();
      });
  }

  //获取数据
  getlist() {
    
    let url = "http://www.devonhello.com/chihu/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
        
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 250) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }

    this.ref.detectChanges();
  }

}
