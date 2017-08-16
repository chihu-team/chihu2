import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Headers, Http } from '@angular/http';
import { AlertController, LoadingController } from 'ionic-angular';
import { RongCloudProvider } from '../rong-cloud/rong-cloud';
import 'rxjs/add/operator/map';

declare var window: any;
@Injectable()
export class UserServiceProvider {

  public _init: any = {
    nickname: "吃乎",
    userimg: "https://avatars2.githubusercontent.com/u/11835988?v=3&u=2a181779eb2164666606366a1df31f9c17cf7a20&s=100",
    _id: null,
    isIdark: false
  }
  public _user: any;
  Version = '1.0';
  isopenimg = false;
  galleryOBJ = null;

  //夜间模式
  isIdark: any = false;
  SetIdark: EventEmitter<number>;
  
  loading;

  //关注的人
  _my_fork_user:any = [];

  constructor( public rc: RongCloudProvider, public http: Http, public storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this._user = this._init;
    this.SetIdark = new EventEmitter();
    this.rc.init();
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
        this.rc.gettoken(this._user._id, this._user.nickname, this._user.userimg);
      }
    });
    this.storage.get('isdark').then((val) => {
      if(val != undefined){
        this.isIdark = val;
        this.SetIdark.emit(this.isIdark);
      }
    });
  }

  //更新用户数据,录入缓存
  setUser(obj) {
    //alert("头像："+img);
    this._user = obj;
    this.storage.set('isdark', false);
    this.storage.set('user', this._user);
    this.storageGet();
  }

  setDark(isdark){
    this.storage.set('isdark', isdark);
  }

  //清除缓存
  clearStorage() {
    this.storage.clear();
    this._user = this._init;
  }

  //开启/关闭夜视功能
  setIdari(){
    this.isIdark = !this.isIdark;
    this.SetIdark.emit(this.isIdark);
    this.setDark(this.isIdark);
  }


}
