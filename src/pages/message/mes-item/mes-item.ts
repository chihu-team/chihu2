import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'mes-item',
  templateUrl: 'mes-item.html'
})
export class MesItemComponent implements OnInit {

  @Input() text: any = '';
  @Input() uid: any = '';
  name = '';
  userimg = '';

  constructor(public http: Http, public navCtrl: NavController) {

  }

  ngOnInit() {
    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu2/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid + '', {
      headers: headers
    })
      .subscribe((res) => {
        this.name = res.json()[0].name;
        this.userimg = res.json()[0].userimg;
      });
  }

  //查看TA的个人主页
  pushPersonPage() {
    this.navCtrl.push('PersonalPage', {
      _id: this.uid
    });
  }

  chart() {
    this.navCtrl.push("ChatPage", {
      targetId: this.uid,
      targetName: this.name
    });
  }

}
