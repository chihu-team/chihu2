import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeForkPage } from './notice-fork';

@NgModule({
  declarations: [
    NoticeForkPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeForkPage),
  ],
  exports: [
    NoticeForkPage
  ]
})
export class NoticeForkPageModule {}
