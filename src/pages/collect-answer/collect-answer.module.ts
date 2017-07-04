import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectAnswerPage } from './collect-answer';
import { WorkComponentModule } from './work/work.module';

@NgModule({
  declarations: [
    CollectAnswerPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(CollectAnswerPage),
  ],
  exports: [
    CollectAnswerPage
  ]
})
export class CollectAnswerPageModule {}
