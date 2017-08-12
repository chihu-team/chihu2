import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeInformPage } from './notice-inform';

@NgModule({
  declarations: [
    NoticeInformPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeInformPage),
  ],
  exports: [
    NoticeInformPage
  ]
})
export class NoticeInformPageModule {}
