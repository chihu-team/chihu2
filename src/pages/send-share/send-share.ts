import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the SendSharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-send-share',
  templateUrl: 'send-share.html',
})
export class SendSharePage {

  ishide = false;
  text = '';
  items = [];
  postimg = [];
  fileTransfer: TransferObject;

  constructor(public http: Http,
    public transfer: Transfer,
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    public alertCtrl: AlertController,
    public UserService: UserServiceProvider) {
    this.fileTransfer = this.transfer.create();
  }

  send() {
    if (this.text.length) {
      this.postdata();
    } else {
      alert("请说上两句...");
    }
  }

  postdata() {

    let url = "http://www.devonhello.com/chihu2/send_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&img=" + JSON.stringify(this.postimg) + "&text=" + this.text, {
      headers: headers
    })
      .subscribe((res) => {
        if (res.json()['result']['ok'] == '1') {

          this.navCtrl.pop();
        }

      });
  }

  up(path) {

    this.fileTransfer.upload(path, "http://www.devonhello.com/chihu2/upload", {})
      .then((data) => {
        // success
        //alert(JSON.stringify(data));
        var idata = JSON.parse(data["response"]);
        this.postimg.push(idata);
        this.items.push(idata['src']);

      }, (err) => {
        // error
        alert('err');
      })
  }

  //长按删除事件
  pressEvent(idx) {
    //alert(idx);
    this.showConfirm(idx);
  }

  //删除提示
  showConfirm(idx) {
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '是否删除此照片?',
      buttons: [
        {
          text: '在想想',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            this.items.splice(idx, 1);
            this.postimg.splice(idx, 1);
            if (this.items.length < 4) {
              this.ishide = false;
            }
          }
        }
      ]
    });
    confirm.present();
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
      quality: 80,
      allowEdit: true,
      sourceType: type,
      correctOrientation: true,
    }).then((imageData) => {
      //alert(imageData);
      //_that.items.push(imageData);
      _that.up(imageData);
      if (_that.items.length >= 4) {
        _that.ishide = true;
      }
    }, (err) => {
      // Handle error
    });
  }

}
