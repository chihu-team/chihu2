import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser'
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage {

  @ViewChild(Content) content: Content;

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
  isIdark;

  constructor(public UserService: UserServiceProvider, public sanitizer: DomSanitizer, public ref: ChangeDetectorRef, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this._id = this.navParams.get("_id");
    this.getdata();
    this.isIdark = this.UserService.isIdark;
}

//获取文章数据
  getdata() {
    let url = "https://www.devonhello.com/chihu2/answer_dec";

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

  tr(html){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
      if (scrollTop > 100) {
        this.title = this.data.title;
      } else {
        this.title = "回答";
      }
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
