import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionListPage } from './question-list';
import { QuestionComponentModule } from './question/question.module'

@NgModule({
  declarations: [
    QuestionListPage,
  ],
  imports: [
    QuestionComponentModule,
    IonicPageModule.forChild(QuestionListPage),
  ],
  exports: [
    QuestionListPage
  ]
})
export class QuestionListPageModule {}
