import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
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

  constructor(public http: Http, public storage: Storage) {
    this._user = this._init;

    this.storage.ready().then(() => {
      this.storageGet();
    });
  }
  storageGet() {
    this.storage.get('user').then((val) => {
      if (val && val._id) {
        this._user = val;
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
    //this.Platform.exitApp();
  }




}
