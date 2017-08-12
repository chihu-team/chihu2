import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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
  ishide:boolean = true;

  constructor(public UserService: UserServiceProvider, public ref: ChangeDetectorRef, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get("_id");
    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu2/question";

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
    
    let url = "http://www.devonhello.com/chihu2/answer_list";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        
      });
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

  add(){
    if(!this.UserService._user._id){
      this.navCtrl.push('LoginPage');
      return true;
    }
    this.navCtrl.push('SendAnswerPage',{
      id: this._id,
      title: this.title
    });
  }

}
