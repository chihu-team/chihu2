import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { AppVersion } from '@ionic-native/app-version';
import { RongCloudProvider } from '../../providers/rong-cloud/rong-cloud';
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  Version = '';
  ishide: boolean = true;
  apkDownloadUrl = '';

  fileTransfer: TransferObject;

  constructor(public rc: RongCloudProvider, public alertCtrl: AlertController, public appVersion: AppVersion, public file: File, public fileOpener: FileOpener, public transfer: Transfer, public http: Http, public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.Version = this.UserService.Version;
    this.appVersion.getVersionNumber().then((version) => {
      this.UserService.Version = version;
      this.Version = this.UserService.Version;
    });
    if (this.UserService._user._id) {
      this.ishide = false;
    }
  }

  out() {
    this.UserService.presentLoadingDefault();
    this.rc.clearConversations().then((res)=>{
      this.UserService.presentLoadingDismiss();
      this.rc.disconnect();
      this.UserService.clearStorage();
      this.navCtrl.pop();
    });
    
  }

  //app版本获取
  getAppVersion() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/appversion";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "", {
      headers: headers
    })
      .subscribe((res) => {
        //alert(res.json()[0]["v"]);
        if (res.json()[0]["v"] != this.UserService.Version) {
          //可升级
          this.apkDownloadUrl = res.json()[0]["url"];
          this.fileTransfer = this.transfer.create();
          this.AppV();
        } else {
          this.UserService.presentLoadingDismiss();
          alert("已经是最新版了...");
        }
      });
  }

  //下载最新版本
  download() {
    alert("新版吃乎正在后台下载中...稍后安装");
    var _that = this;
    var apkurl = this.file.externalDataDirectory + 'chihu2.apk';
    this.fileTransfer.download(this.apkDownloadUrl, apkurl).then((entry) => {
      //打开apk
      this.fileOpener.open(apkurl, 'application/vnd.android.package-archive')
        .then(() => console.log('File is opened'))
        .catch(e => alert('Error：' + e));

    }, (error) => {
      // handle error
    });

  }

  AppV() {

    this.UserService.presentLoadingDismiss();
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否要更新到最新版本?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.download();
          }
        }
      ]
    });

    alert.present();
  }

}
