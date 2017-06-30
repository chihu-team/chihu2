import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendCommentsPage } from './send-comments';

@NgModule({
  declarations: [
    SendCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(SendCommentsPage),
  ],
  exports: [
    SendCommentsPage
  ]
})
export class SendCommentsPageModule {}
