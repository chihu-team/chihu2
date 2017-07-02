import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyQuestionPage } from './my-question';
import { QuestionComponentModule } from '../question-list/question/question.module'

@NgModule({
  declarations: [
    MyQuestionPage,
  ],
  imports: [
    QuestionComponentModule,
    IonicPageModule.forChild(MyQuestionPage),
  ],
  exports: [
    MyQuestionPage
  ]
})
export class MyQuestionPageModule {}
