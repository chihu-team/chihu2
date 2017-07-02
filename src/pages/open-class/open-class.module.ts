import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenClassPage } from './open-class';

@NgModule({
  declarations: [
    OpenClassPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenClassPage),
  ],
  exports: [
    OpenClassPage
  ]
})
export class OpenClassPageModule {}
