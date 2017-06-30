import { Component, Input, OnChanges } from '@angular/core';
import { UserServiceProvider } from '../../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent implements OnChanges {

  @Input() tabanimate: boolean = false;
  @Input() data: any = {};
  @Input() _id: any;
  conts: any = 0;
  iscoll: boolean = false;
  isthank: boolean = false;
  ischeck = false;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {
    
  }

  ngOnChanges(ch){
    try {
      if(ch['data'].currentValue && ch['data'].currentValue.uid){
      //console.log( ch['data'].currentValue.uid );
      this.conts = this.data.mark.cont;
      this.checkcoll();
    }
    } catch (error) {
      
    }
    
    
  }

  pushCommentsListPage( type, name, uid, _id ) {
    this.navCtrl.push('CommentsListPage', {
      type: type,
      _id: _id,
      name: name,
      uid: uid
    });
  }

  //检查是否已经收藏
  checkcoll() {

    if (this.UserService._user._id != this.data['uid'] && this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu/checkcollart";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "artid=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&type=1", {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json().length != "0") {
            this.iscoll = true;
          }
          this.checkthank();
        });


    }else{
      this.ischeck = true;
    }
  }

  //检查是否已经关注
  checkthank() {

    let url = "http://www.devonhello.com/chihu/checkthank";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "artid=" + this.data['_id'] + "&id=" + this.UserService._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json().length != "0") {
          this.isthank = true;
          this.ischeck = true;
        }
      });


  }

  //感谢
  thank() {
    if (this.UserService._user._id) {
      if (this.UserService._user._id == this.data['uid']) {
        alert("无需感谢自己");
        return true;
      }

      let url = "http://www.devonhello.com/chihu/thank";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&type=1" + "&userimg=" + this.UserService._user.userimg + "&artid=" + this._id + "&title=" + this
        .data['title'], {
          headers: headers
        })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {

            this.isthank = true;

          }
        });
    } else if (this.ischeck) {
      //未登录跳转登陆
      this.navCtrl.push("LoginPage");
    }

  }

  //收藏
  collect() {

    if (this.UserService._user._id) {
      if (this.UserService._user._id == this.data['uid']) {
        alert("无需收藏自己的作品");
        return true;
      }

      let url = "http://www.devonhello.com/chihu/coll_article";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "_id=" + this.data['_id'] + "&uid=" + this.UserService._user._id + "&name=" + this.data['name'] + "&type=1" + "&userimg=" + this.data['userimg'] + "&title=" + this.data['title'] + "&text=" + this.data['text'] + "&workbanner=" + this.data['workbanner'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {

            this.iscoll = true;

          }
        });
    } else if (this.ischeck) {
      //未登录跳转登陆
      this.navCtrl.push("LoginPage");
    }




  }

}
