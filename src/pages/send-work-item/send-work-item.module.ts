import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendWorkItemPage } from './send-work-item';
import { Camera } from '@ionic-native/camera';
import { Transfer, TransferObject } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    SendWorkItemPage,
  ],
  imports: [
    IonicPageModule.forChild(SendWorkItemPage),
  ],
  exports: [
    SendWorkItemPage
  ],
  providers: [
    Camera,
    Transfer,
    TransferObject
  ]
})
export class SendWorkItemPageModule {}
