import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { QuestionComponent } from './question';
import { HeaderComponentModule } from './header/header.module';
import { FooterComponentModule } from './footer/footer.module';

@NgModule({
  declarations: [
    QuestionComponent,
  ],
  imports: [
    HeaderComponentModule,
    FooterComponentModule,
    IonicModule,
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionComponentModule {}
