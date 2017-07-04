import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input() data: any = {};

  constructor(public navCtrl: NavController) {

  }

  //查看TA的个人页面
  pushPersonPage(_id) {
    this.navCtrl.push('PersonalPage', {
      _id: _id
    });
  }

}
