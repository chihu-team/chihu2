import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/**
 * Generated class for the SendCommentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-comments',
  templateUrl: 'send-comments.html',
})
export class SendCommentsPage {

  text = '';
  pl = '';
  artid = '';
  comid = '';
  type = '';
  targetname = '';
  targetid = '';
  _id = '';
  isreply = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserServiceProvider, public http: Http) {
    this.pl = this.navParams.get('pl');
    this.artid = this.navParams.get('artid');
    this.comid = this.navParams.get('comid');
    this.type = this.navParams.get('type');
    this.targetname = this.navParams.get('targetname');
    this.targetid = this.navParams.get('targetid');
    this._id = this.navParams.get('_id');
    this.isreply = this.navParams.get('reply');
  }

  save() {
    if (this.text.length < 1) {
      alert("请输入评论的内容!");
      return true;
    }
    if (this.comid == '0') {
      this.postdata();
    } else {
      this.reply();
    }

  }

  postdata() {
    
    //this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/send_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&userimg=" + this.UserService._user.userimg + "&name=" + this.UserService._user.nickname + "&artid=" + this.artid + "&type=" + this.type + "&text=" + this.text + "&targetid=" + this.targetid, {
      headers: headers
    })
      .subscribe((res) => {
        //this.UserService.presentLoadingDismiss();
        if (res.json()['result']['ok'] == 1) {
          this.navCtrl.pop();
        }
      });
  }

  //回复
  reply() {

    //this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/reply_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "_id=" + this._id + "&name=" + this.UserService._user.nickname + "&targetname=" + this.targetname + "&targetid=" + this.targetid + "&text=" + this.text + "&uid=" + this.UserService._user._id + "&artid=" + this.artid + "&type=" + this.type + "&userimg=" + this.UserService._user.userimg + "&reply=" + this.isreply, {
      headers: headers
    })
      .subscribe((res) => {

        if (res.json()['ok'] == 1) {
          //this.UserService.presentLoadingDismiss();
          this.navCtrl.pop();
        }
      });
  }



}
