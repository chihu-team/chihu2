import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'share',
  templateUrl: 'share.html'
})
export class ShareComponent {

  @Input() data: any = {};

  constructor(public navCtrl: NavController) {

  }

  pushOpenSharePage(_id) {
    this.navCtrl.push('OpenSharePage', {
      _id: _id
    });
  }

}