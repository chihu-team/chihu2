import { Component, Input } from '@angular/core';
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
export class FooterComponent {

  @Input() data: any = {};
  @Input() type: any = '';


  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {

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

}
