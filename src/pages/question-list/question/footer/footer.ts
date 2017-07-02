import { Component, Input, OnChanges } from '@angular/core';
import { UserServiceProvider } from '../../../../providers/user-service/user-service';
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
  //是否关注
  ishide: boolean = true;
  _id;

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController) {

  }

  ngOnChanges(ch) {

    try {
      if (ch['data'].currentValue && ch['data'].currentValue._id) {
        //console.log( ch['data'].currentValue.uid );
        this._id = ch['data'].currentValue._id;
        this.checkfork();
      }
    } catch (error) { }

  }

  checkfork() {
    if (this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu/checkforkquestion";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "artid=" + this._id + "&id=" + this.UserService._user._id, {
        headers: headers
      })
        .subscribe((res) => {
          
          if (res.json().length == "0") {
            this.ishide = false;
          }

        });
    }
  }

  fork() {
    if (this.UserService._user._id) {
      let url = "http://www.devonhello.com/chihu/forkquestion";

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(url, "uid=" + this.data['uid'] + "&artid=" + this._id + "&id=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&title=" + this.data['title'], {
        headers: headers
      })
        .subscribe((res) => {
          if (res.json()['result']['ok'] == 1) {
            this.ishide = true;

            alert("关注成功");
          }

        });
    } else {
      this.navCtrl.push('LoginPage');
    }
  }

}
