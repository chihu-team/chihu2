import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  @Input() data:any = [];
  @Input() type:any = [];

  constructor(
    public navCtrl: NavController
  )
  {}

  //评论回复列表
  openComments(id) {
    this.navCtrl.push('CommentsPage', {
      id: id,
      type: this.type
    });
  }
  

  //查看TA的个人主页
  pushPersonPage(_id) {
    this.navCtrl.push('PersonalPage', {
      _id: _id
    });
  }

}