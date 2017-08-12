import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  id;
  data: any = {};
  ishide: boolean = true;
  type;

  constructor(public http: Http, public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.type = this.navParams.get('type');
    this.getComment();
  }

  //获取评论
  getComment() {

    let url = "http://www.devonhello.com/chihu2/see_comment";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "&id=" + this.id + "&type=" + this.type, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json()[0];
        if (this.data['commarr'].length > 0) {
          this.ishide = false;
        }

      });
  }

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.navCtrl.push('PersonalPage', {
      _id: _id
    });
  }

  sendComment(pl, comid, targetname, targetid, _id, reply) {
    if (!this.UserService._user._id) {
      this.navCtrl.push('LoginPage');
      return true;
    }

    this.navCtrl.push('SendCommentsPage', {
      pl: pl,
      artid: this.data['artid'],
      comid: comid,
      type: this.type,
      targetname: targetname,
      targetid: targetid,
      _id: _id,
      reply: reply
    });
  }

  ionViewDidEnter() {
    this.getComment();
  }

}
