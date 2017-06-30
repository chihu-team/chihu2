import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnswerPage } from './answer';
import { HeaderComponentModule } from './header/header.module';
import { FooterComponentModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AnswerPage,
  ],
  imports: [
    HeaderComponentModule,
    FooterComponentModule,
    IonicPageModule.forChild(AnswerPage),
  ],
  exports: [
    AnswerPage
  ]
})
export class AnswerPageModule {}
