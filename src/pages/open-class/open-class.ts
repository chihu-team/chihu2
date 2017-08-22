import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-open-class',
  templateUrl: 'open-class.html',
})
export class OpenClassPage {

  iclass:any = '分类';
  items:any = [];
  isIdark;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isIdark = this.UserService.isIdark;
    this.iclass = this.navParams.get('class');
    this.getdata();
}

  getdata(){
    this.UserService.presentLoadingDefault();
    let url = "https://www.devonhello.com/chihu2/workclass";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=1" + "&len=" + this.items.length + "&iclass=" + this.iclass, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = this.items.concat(res.json());
        this.UserService.presentLoadingDismiss();
      });
  }

  doInfinite(infiniteScroll) {

    this.getdata();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1500);
  }

  //打开作品
  pushArticlePage(_id) {
    this.navCtrl.push('ArticlePage', {
      _id: _id
    });
  }

}
