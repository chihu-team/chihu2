import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {

  @ViewChild(Content) content: Content;
  isIdark;
  //数据
  data: any = [];
  _refresher = null;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.UserService.SetIdark.subscribe((data) => {
      this.isIdark = data;
    })
    this.getdata();
}

  //获取分享数据
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.data.length, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = this.data.concat(res.json());
        this.UserService.presentLoadingDismiss();
        if( this._refresher ){
          this._refresher.complete();
        }
      });
  }

  pushQueList(){
    this.navCtrl.push( 'QuestionListPage' );
  }

  pushHotWork(){
    this.navCtrl.push( 'HotWorkPage' );
  }

  pushHotAnswer(){
    this.navCtrl.push( 'HotAnswerPage' );
  }

  pushHotShare(){
    this.navCtrl.push( 'HotSharePage' );
  }

  doRefresh(refresher) {
    
    this.data = [];
    this.getdata();

    this._refresher = refresher;

  }

  doInfinite(infiniteScroll) {

    //alert(1);
    this.getdata();

    setTimeout(() => {
      infiniteScroll.complete();
    }, 1500);
  }

  //点击到顶部
  tapEvent(e) {
    this.content.scrollToTop();
  }

}
