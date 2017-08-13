import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  
  @ViewChild(Content) content: Content;

  data:any = {};
  _id:any = 0;

   //头部导航标题
  title = '';
  //底部导航class运动控制属性
  tabanimate: boolean = false;
  //头部导航class运动控制属性
  tabbule: boolean = false;
  old_scrollTop = 0;
  conts = 0;

  constructor( public UserService: UserServiceProvider, public ref: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this._id = this.navParams.get("_id");
    this.getdata();
    
}

//获取文章数据
  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/article_dec";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        this.UserService.presentLoadingDismiss();
      });
  }

  //滚动监听
  onScroll($event: any) {

    let scrollTop = $event.scrollTop;

    if (scrollTop > 110 && (this.old_scrollTop - scrollTop) < 0) {
      if (!this.tabanimate) {
        this.tabanimate = true;
      }


    } else {
      this.tabanimate = false;
      if (!this.tabbule && scrollTop > 150) {
        this.tabbule = true;
        this.title = this.data['title'];
      }
      if (scrollTop <= 150) {
        this.tabbule = false;
        this.title = '';
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
