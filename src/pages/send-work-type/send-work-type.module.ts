import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendWorkTypePage } from './send-work-type';

@NgModule({
  declarations: [
    SendWorkTypePage,
  ],
  imports: [
    IonicPageModule.forChild(SendWorkTypePage),
  ],
  exports: [
    SendWorkTypePage
  ]
})
export class SendWorkTypePageModule {}
