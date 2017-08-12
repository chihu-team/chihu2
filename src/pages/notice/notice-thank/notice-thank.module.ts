import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeThankPage } from './notice-thank';

@NgModule({
  declarations: [
    NoticeThankPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeThankPage),
  ],
  exports: [
    NoticeThankPage
  ]
})
export class NoticeThankPageModule {}
