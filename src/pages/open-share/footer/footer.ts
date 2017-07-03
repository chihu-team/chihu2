import { Component, Input, OnChanges } from '@angular/core';
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
export class FooterComponent implements OnChanges {

  
  @Input() data: any = {};
  conts: any = 0;
  islike: boolean = false;
  ischeck = false;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {

  }

  ngOnChanges(ch) {
    try {
      if (ch['data'].currentValue && ch['data'].currentValue.uid) {
        //console.log( ch['data'].currentValue.uid );
        this.conts = this.data.mark.cont;
        this.checklike();
      }
    } catch (error) {

    }


  }

  sendComment( pl, comid ){
    
    this.navCtrl.push('SendCommentsPage', {
      pl: pl,
      artid: this.data['_id'],
      comid: comid,
      type: 3,
      targetid: this.data['uid']
    });
  }

  //检查是否已经收藏
  checklike() {

    if (this.UserService._user._id != this.data['uid'] && this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu2/checkcollshare";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&id=" + this.UserService._user._id + "&artid=" + this.data['_id'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json().length != "0") {
            this.islike = true;
          }

        });


    } else {
      this.ischeck = true;
    }
  }

}
