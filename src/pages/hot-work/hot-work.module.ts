import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotWorkPage } from './hot-work';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    HotWorkPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(HotWorkPage),
  ],
  exports: [
    HotWorkPage
  ]
})
export class HotWorkPageModule {}
