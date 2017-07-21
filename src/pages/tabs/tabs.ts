import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs, NavParams, Content, Platform, ToastController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = 'HomePage';
  tabClass = 'ClassPage';
  tabNotice = 'NoticePage';
  tabFound = 'FoundPage';
  tabMore = 'MorePage';

  backButtonPressed: boolean = false;
  @ViewChild('myTabs') tabs: Tabs;
  itimer = null;
  apkDownloadUrl = '';

  fileTransfer: TransferObject;

  constructor(public fileOpener: FileOpener, public transfer: Transfer, public http: Http, public appVersion: AppVersion, public UserService: UserServiceProvider, public platform: Platform, public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public file: File) {
    setTimeout(() => {
      this.pageBack();
    }, 1000);
  }

  //app版本获取
  getAppVersion() {

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
        }
      });
  }

  //下载最新版本
  download() {
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

  pageBack() {

    this.platform.registerBackButtonAction((): any => {

      this.appVersion.getVersionNumber().then((version) => {
        this.UserService.Version = version;
      });

      if (this.UserService.isopenimg) {
        this.UserService.galleryOBJ.close();
        this.UserService.isopenimg = false;
        return false;
      }


      let activeVC = this.navCtrl.getActive();
      let page = activeVC.instance;
      page.tabs
      if (!(page instanceof TabsPage)) {
        if (!this.navCtrl.canGoBack()) {
          return this.showExit();
        }
        this.UserService.presentLoadingDismiss();
        return this.navCtrl.pop();
      }
      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        return this.showExit();
      }
      this.UserService.presentLoadingDismiss();
      return activeNav.pop();

    }, 101);
  }

  //双击退出提示框
  showExit() {
    var _that = this;
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      this.presentToast();
      this.backButtonPressed = true;
      if (this.itimer) {
        clearTimeout(this.itimer);
      }
      this.itimer = setTimeout(() => {
        _that.backButtonPressed = false
      }, 2000);
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '再次点击返回退出APP',
      duration: 2000
    });
    toast.present();
  }
}
