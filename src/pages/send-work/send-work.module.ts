import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendWorkPage } from './send-work';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    SendWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(SendWorkPage),
  ],
  exports: [
    SendWorkPage
  ],
  providers: [
    Camera,
    Transfer,
    TransferObject
  ]
})
export class SendWorkPageModule {}
