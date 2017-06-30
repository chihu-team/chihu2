import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionPage } from './question';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    QuestionPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(QuestionPage),
  ],
  exports: [
    QuestionPage
  ]
})
export class QuestionPageModule {}
