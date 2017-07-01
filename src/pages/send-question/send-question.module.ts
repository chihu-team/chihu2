import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendQuestionPage } from './send-question';

@NgModule({
  declarations: [
    SendQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(SendQuestionPage),
  ],
  exports: [
    SendQuestionPage
  ]
})
export class SendQuestionPageModule {}
