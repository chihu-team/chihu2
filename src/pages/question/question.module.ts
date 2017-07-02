import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionPage } from './question';
import { WorkComponentModule } from '../../components/work/work.module';
import { HeaderComponentModule } from '../question-list/question/header/header.module'
import { FooterComponentModule } from '../question-list/question/footer/footer.module'

@NgModule({
  declarations: [
    QuestionPage,
  ],
  imports: [
    WorkComponentModule,
    HeaderComponentModule,
    FooterComponentModule,
    IonicPageModule.forChild(QuestionPage),
  ],
  exports: [
    QuestionPage
  ]
})
export class QuestionPageModule {}
