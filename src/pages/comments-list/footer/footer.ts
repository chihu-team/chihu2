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

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {
    
  }

  sendComment( name, comid ){
    alert(name);
    alert(comid);
    this.navCtrl.push('SendCommentsPage');
  }

}
