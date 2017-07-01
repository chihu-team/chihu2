import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendSharePage } from './send-share';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';


@NgModule({
  declarations: [
    SendSharePage,
  ],
  imports: [
    IonicPageModule.forChild(SendSharePage),
  ],
  exports: [
    SendSharePage
  ],
  providers: [
    Camera,
    Transfer,
    TransferObject
  ]
})
export class SendSharePageModule {}
