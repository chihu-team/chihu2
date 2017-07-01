import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotAnswerPage } from './hot-answer';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    HotAnswerPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(HotAnswerPage),
  ],
  exports: [
    HotAnswerPage
  ]
})
export class HotAnswerPageModule {}
