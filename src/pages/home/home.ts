import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Content) content: Content;
  tabanimate: boolean = false;
  public old_scrollTop = 0;
  public new_scrollTop = 0;
  _refresher = null;

  isIdark;
  //数据
  items = [];
  old_items = [];

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this.isIdark = this.UserService.isIdark;
    this.UserService.SetIdark.subscribe((data) => {
      this.isIdark = data;
    })
    this.getdata();
  }

  //获取数据
  getdata() {
    this.UserService.presentLoadingDefault();

    let url = "https://www.devonhello.com/chihu2/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.items.length, {
      headers: headers
    })
      .subscribe((res) => {
        if (this._refresher) {
          this._refresher.complete();
        }
        
        this.items = this.items.concat(res.json());
        if(this.old_items.length > 0){
          this.items.splice(0,this.old_items.length);
          this.old_items = [];
        }
        this.UserService.presentLoadingDismiss();
      });
  }

  openSearch() {
    this.navCtrl.push('SearchPage');
  }

  doRefresh(refresher) {
    this.old_items = this.items;
    this.getdata();

    this._refresher = refresher;
  }

  doInfinite(infiniteScroll) {

    this.getdata();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1500);
  }

  onScroll($event: any) {

    var scrollTop = $event.scrollTop;

    if (scrollTop > 50 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }

    } else {
      this.tabanimate = false;
    }
    this.old_scrollTop = scrollTop;
    this.ref.detectChanges();
  }

  openMmessage() {
    this.checkLogin('MessagePage');
  }

  //创建菜谱
  CreateCook() {
    this.checkLogin('SendWorkTypePage')
  }

  //提问
  CreateQuestion() {
    this.checkLogin('SendQuestionPage');
  }

  //分享
  CreateShare() {
    this.checkLogin('SendSharePage');
  }

  //检查登录状态
  checkLogin(page) {

    if (this.UserService._user._id) {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

}
