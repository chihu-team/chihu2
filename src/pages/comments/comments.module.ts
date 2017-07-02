import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsPage } from './comments';
import { FooterComponentModule } from './footer/footer.module';

@NgModule({
  declarations: [
    CommentsPage,
  ],
  imports: [
    FooterComponentModule,
    IonicPageModule.forChild(CommentsPage),
  ],
  exports: [
    CommentsPage
  ]
})
export class CommentsPageModule {}
