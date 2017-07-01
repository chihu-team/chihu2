import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { QuestionComponent } from './question';

@NgModule({
  declarations: [
    QuestionComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    QuestionComponent
  ]
})
export class QuestionComponentModule {}
