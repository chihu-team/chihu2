import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
  
  //数据
  items = [];

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this.getdata();
  }

  //获取数据
  getdata() {
    
    let url = "http://www.devonhello.com/chihu2/home";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
        
      });
  }

  openSearch(){
    this.navCtrl.push( 'SearchPage' );
  }

  doRefresh(refresher) {
    this.getdata();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {

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

  openMmessage(){
    this.navCtrl.push( 'MessagePage' );
  }

  //创建菜谱
  CreateCook() {
    this.checkLogin('SendWorkTypePage')
    //this.navCtrl.push('Login');
  }

  //提问
  CreateQuestion() {
    this.checkLogin('SendQuestionPage');
    //this.navCtrl.push('CreateQuestionType');
  }

  //分享
  CreateShare() {
    this.checkLogin('SendSharePage');
    //this.navCtrl.push('CreateShare');
  }

  //检查登录状态
  checkLogin(page) {

    if (this.UserService._user._id) {
      this.navCtrl.push(page);
    } else {
      this.navCtrl.push('Login');
    }
  }

}
