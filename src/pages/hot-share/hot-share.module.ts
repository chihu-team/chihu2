import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotSharePage } from './hot-share';
import { ShareComponentModule } from '../../components/share/share.module';

@NgModule({
  declarations: [
    HotSharePage,
  ],
  imports: [
    ShareComponentModule,
    IonicPageModule.forChild(HotSharePage),
  ],
  exports: [
    HotSharePage
  ]
})
export class HotSharePageModule {}
