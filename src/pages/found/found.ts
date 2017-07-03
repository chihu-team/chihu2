import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the FoundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {

  //数据
  data: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
}

  //获取分享数据
  getdata() {
    let url = "http://www.devonhello.com/chihu2/share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=1", {
      headers: headers
    })
      .subscribe((res) => {
        this.data = this.data.concat(res.json());
        
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
    console.log('Begin async operation', refresher);

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

}
