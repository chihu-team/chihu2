import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Headers, Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserServiceProvider {

  public _init: any = {
    nickname: "吃乎",
    userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
    _id: null,
  }
  public _user: any;
  Version = '1.0';
  
  loading;

  //关注的人
  _my_fork_user:any = [];

  constructor(public http: Http, public storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this._user = this._init;

    this.storage.ready().then(() => {
      this.storageGet();
    });
  }

  //获取数据
  get_fork_user() {
    
    let url = "http://www.devonhello.com/chihu2/myfork";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._user._id, {
      headers: headers
    })
      .subscribe((res) => {
        this._my_fork_user = res.json();
        this.presentLoadingDismiss();
      });
  }


  checkisfork(uid){
    for (var i = 0; i < this._my_fork_user.length; i ++) {
        if(this._my_fork_user[i]['uid'] == uid){
          return true;
        }
    }
    return false;
  }


  presentLoadingDefault() {
        this.loading = this.loadingCtrl.create({
            content: '吃乎正在加载中...'
        });
        this.loading.present();
    }

    presentLoadingDismiss() {
        this.loading.dismiss();
    }

  storageGet() {
    this.storage.get('user').then((val) => {
      if (val && val._id) {
        this._user = val;
        this.get_fork_user();
      }
    });
  }

  //更新用户数据,录入缓存
  setUser(obj) {
    //alert("头像："+img);
    this._user = obj;
    this.storage.set('user', this._user);
    this.storageGet();
  }

  //清除缓存
  clearStorage() {
    this.storage.clear();
    this._user = this._init;
  }




}
