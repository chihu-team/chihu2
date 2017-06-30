import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the ShareComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
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
