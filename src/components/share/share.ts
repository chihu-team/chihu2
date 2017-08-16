import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class ShareComponent {

  @Input() data: any = {};
  isIdark;

  constructor(public navCtrl: NavController, public UserService: UserServiceProvider) {
    this.isIdark = this.UserService.isIdark;
    this.UserService.SetIdark.subscribe((data) => {
      this.isIdark = data;
    })
  }

  pushOpenSharePage(_id) {
    this.navCtrl.push('OpenSharePage', {
      _id: _id
    });
  }

}