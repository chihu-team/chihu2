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

  @Input() name:any = '';
  @Input() _id:any = '';
  @Input() uid:any = '';
  @Input() type:any = '';
  isIdark;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {
    this.isIdark = this.UserService.isIdark;
  }

  sendComment( pl, comid ){
    
    if( this.UserService._user._id ){
      this.navCtrl.push('SendCommentsPage', {
      pl: pl,
      artid: this._id,
      comid: comid,
      type: this.type,
      targetid: this.uid
    });
    }else{
      this.navCtrl.push( 'LoginPage' );
    }

  }

}
