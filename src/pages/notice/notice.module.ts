import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticePage } from './notice';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    NoticePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticePage),
    SuperTabsModule.forRoot()
  ],
  exports: [
    NoticePage
  ]
})
export class NoticePageModule {}
