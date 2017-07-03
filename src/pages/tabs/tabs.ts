import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs, NavParams, Content, Platform, ToastController } from 'ionic-angular';
import { CodePush } from '@ionic-native/code-push';
import { AppVersion } from '@ionic-native/app-version';
import { UserServiceProvider } from '../../providers/user-service/user-service';

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

  constructor(public appVersion: AppVersion, public UserService: UserServiceProvider, public codePush: CodePush, public platform: Platform, public navCtrl: NavController, public toastCtrl: ToastController) {
    setTimeout(()=>{
      this.pageBack();
    },1000);
  }

  pageBack() {

    this.platform.registerBackButtonAction((): any => {
      const downloadProgress = (progress) => { }
      this.codePush.sync({}, downloadProgress);
      this.appVersion.getVersionNumber().then((version) => {
        this.UserService.Version = version;
      });
      let activeVC = this.navCtrl.getActive();
      let page = activeVC.instance;
      page.tabs
      if (!(page instanceof TabsPage)) {
        if (!this.navCtrl.canGoBack()) {
          return this.showExit();
        }
        return this.navCtrl.pop();
      }
      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        return this.showExit();
      }
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
