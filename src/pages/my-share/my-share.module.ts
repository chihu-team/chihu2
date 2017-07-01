import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySharePage } from './my-share';
import { ShareComponentModule } from '../../components/share/share.module';

@NgModule({
  declarations: [
    MySharePage,
  ],
  imports: [
    ShareComponentModule,
    IonicPageModule.forChild(MySharePage),
  ],
  exports: [
    MySharePage
  ]
})
export class MySharePageModule {}
