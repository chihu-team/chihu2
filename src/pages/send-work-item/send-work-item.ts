import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { WorkDataProvider } from '../../providers/work-data/work-data';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the SendWorkItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-send-work-item',
  templateUrl: 'send-work-item.html',
})
export class SendWorkItemPage {

  idx = 0;
  banner = 'assets/icon/work_item.png';
  text = '';
  fileTransfer: TransferObject;
  idata: any = {
    width: '',
    src: '',
    text: '',
    height: ''
  };

  constructor(public http: Http, public transfer: Transfer, public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private camera: Camera, public alertCtrl: AlertController, public UserService: UserServiceProvider, public WorkService: WorkDataProvider) {
    this.idx = this.navParams.get('idx');
    this.fileTransfer = this.transfer.create();
    if (this.idx != -1) {
      this.banner = this.WorkService._item[this.idx]['src'];
      this.text = this.WorkService._item[this.idx]['text'];
    }
  }

  send() {

    if (this.text.length) {
      this.idata.text = this.text;
      this.WorkService._item.push(this.idata);
      this.navCtrl.pop();
    }



  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '图片来源',
      buttons: [
        {
          text: '相册',
          icon: 'images',
          handler: () => {
            this.seleImgType(0);
          }
        },
        {
          text: '相机',
          icon: 'camera',
          handler: () => {
            this.seleImgType(1);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  //成品图片
  seleImgType(type) {
    var _that = this;
    this.camera.getPicture({
      quality: 90,
      allowEdit: true,
      sourceType: type,
      correctOrientation: true,
    }).then((imageData) => {
      this.up(imageData)
    }, (err) => {
      // Handle error
    });
  }

  up(path) {
    //this.UserService.presentLoadingDefault();
    this.fileTransfer.upload(path, "http://www.devonhello.com/chihu/upload", {})
      .then((data) => {
        // success
        //alert(JSON.stringify(data));
        var response = JSON.parse(data["response"]);
        this.idata.width = response['width'];
        this.idata.height = response['height'];
        this.idata.src = response['src'];
        this.banner = this.idata.src;
        //this.postimg.push(idata);
        //this.items.push(idata['src']);
        //this.UserService.presentLoadingDismiss();
      }, (err) => {
        // error
        alert('err');
      })
  }

}
