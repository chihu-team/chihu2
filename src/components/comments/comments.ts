import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'comments',
  templateUrl: 'comments.html'
})
export class CommentsComponent {

  @Input() data:any = [];
  @Input() type:any = [];
  isIdark;

  constructor(
    public navCtrl: NavController,
    public UserService: UserServiceProvider
  )
  {
    this.isIdark = this.UserService.isIdark;
  }

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