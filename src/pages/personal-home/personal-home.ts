import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-personal-home',
  templateUrl: 'personal-home.html',
})
export class PersonalHomePage {

  id: any;
  items: any = [];
  rootNavCtrl: NavController;
  tar: any = '';
  ishide: boolean = true;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.tar = this.navParams.data.tar;
    this.id = this.navParams.data._id;
    this.getdata();
    
  }

  //获取数据
  getdata() {
    let url = "http://www.devonhello.com/chihu2/new_list";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length > 0) {
          this.ishide = false;
          this.items = this.items.concat(res.json());
        }
      });
  }

  pushMySharePage() {
    this.rootNavCtrl.push('MySharePage', {
      id: this.id
    });
  }

  pushMyQuestionPage() {
    this.rootNavCtrl.push('MyQuestionPage', {
      id: this.id
    });
  }

  pushMyWorkPage() {
    this.rootNavCtrl.push('MyWorkPage', {
      id: this.id
    });
  }

  pushMyAnswerPage() {
    this.rootNavCtrl.push('MyAnswerPage', {
      id: this.id
    });
  }

  pushFocusPage() {
    this.rootNavCtrl.push('MyForkPage', {
      id: this.id
    });
  }

  //打开页面
  pushAnswerPage(_id) {
    this.rootNavCtrl.push('AnswerPage', {
      _id: _id
    });
  }

  //打开页面
  pushQuestionPage(_id) {
    this.rootNavCtrl.push('QuestionPage', {
      _id: _id
    });
  }

  //打开页面
  pushArticlePage(_id) {
    this.rootNavCtrl.push('ArticlePage', {
      _id: _id
    });
  }

}
