import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenSharePage } from './open-share';

@NgModule({
  declarations: [
    OpenSharePage,
  ],
  imports: [
    IonicPageModule.forChild(OpenSharePage),
  ],
  exports: [
    OpenSharePage
  ]
})
export class OpenSharePageModule {}
