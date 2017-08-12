import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'work',
  templateUrl: 'work.html'
})
export class WorkComponent {

  @Input() data: any = {};

  irootNavCtrl: NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.irootNavCtrl = this.navParams.get('rootNavCtrl');
  }

  //打开作品
  pushArticlePage(_id) {
    this.irootNavCtrl.push('ArticlePage', {
      _id: _id
    });
  }

}
