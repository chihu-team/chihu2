import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForkUserPage } from './fork-user';

@NgModule({
  declarations: [
    ForkUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ForkUserPage),
  ],
  exports: [
    ForkUserPage
  ]
})
export class ForkUserPageModule {}
