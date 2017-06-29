import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerPage } from './answer';

@NgModule({
  declarations: [
    AnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(AnswerPage),
  ],
  exports: [
    AnswerPage
  ]
})
export class AnswerPageModule {}
