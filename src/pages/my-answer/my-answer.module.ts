import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAnswerPage } from './my-answer';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    MyAnswerPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(MyAnswerPage),
  ],
  exports: [
    MyAnswerPage
  ]
})
export class MyAnswerPageModule {}
