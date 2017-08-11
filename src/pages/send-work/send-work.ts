import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { WorkDataProvider } from '../../providers/work-data/work-data';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
import { Transfer, TransferObject } from '@ionic-native/transfer';
/**
 * Generated class for the SendWorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-send-work',
  templateUrl: 'send-work.html',
})
export class SendWorkPage {

  title = '';
  text = '';
  tip = '';
  items = [];
  foods = [];
  isReordering: boolean = false;
  sphide: boolean = false;
  banner = "assets/icon/work_banner.png";
  fileTransfer: TransferObject;

  constructor(
    public http: Http,
    public navCtrl: NavController,
    public transfer: Transfer,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public WorkService: WorkDataProvider,
    public UserService: UserServiceProvider
  ) {
    this.title = this.WorkService._title;
    this.fileTransfer = this.transfer.create();
    this.init();
  }

  init() {
    this.items = this.WorkService._item;
  }

  ionViewDidEnter() {
    this.init();
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  edit() {
    this.sphide = !this.sphide;
    this.isReordering = !this.isReordering;
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '食材',
      message: "输入你要添加的材料和用量，例如：鸡蛋，一只",
      inputs: [
        {
          name: 'name',
          placeholder: '材料：如鸡蛋'
        },
        {
          name: 'len',
          placeholder: '用量：如一只'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
          }
        },
        {
          text: '添加',
          handler: data => {
            this.foods.push({
              name: data.name,
              len: data.len
            });
            //alert(data.name);
            //alert(data.len);
          }
        }
      ]
    });
    prompt.present();
  }

  //发布
  send() {
    alert("后台正在开发，暂时停止发布功能");
    // if (this.items.length < 1 && this.foods.length < 1 && this.title.length < 1 && this.banner == "assets/icon/work_banner.png") {
    //   alert("抱歉，请填写完整...");
    // } else {
    //   this.postdata();
    // }

  }

  postdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/send_article";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "uid=" + this.UserService._user._id + "&name=" + this.UserService._user.nickname + "&userimg=" + this.UserService._user.userimg + "&work=" + JSON.stringify(this.items) + "&text=" + this.text + "&food=" + JSON.stringify(this.foods) + "&workbanner=" + this.banner + "&tip=" + this.tip + "&type=" + "1" + "&title=" + this.title, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        if (res.json()['result']['ok'] == '1') {
          this.navCtrl.popToRoot();
        }

      });
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
      message: '是否删除此材料?',
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
            this.foods.splice(idx, 1);
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
      this.up(imageData);
    }, (err) => {
      // Handle error
    });
  }

  up(path) {
    this.UserService.presentLoadingDefault();
    this.fileTransfer.upload(path, "http://www.devonhello.com/chihu2/upload", {})
      .then((data) => {
        // success
        //alert(JSON.stringify(data));
        var response = JSON.parse(data["response"]);
        this.banner = response['src'];
        this.UserService.presentLoadingDismiss();
      }, (err) => {
        // error
        this.UserService.presentLoadingDismiss();
        alert('err');
      })
  }

  //添加步骤
  addItem() {
    this.navCtrl.push('SendWorkItemPage', {
      idx: -1
    });
  }

  //修改步骤信息
  editItem(idx) {
    this.navCtrl.push('SendWorkItemPage', {
      idx: idx
    });
  }

}
