import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentsListPage } from './comments-list';
import { CommentsComponentModule } from '../../components/comments/comments.module';
import { FooterComponentModule } from './footer/footer.module';

@NgModule({
  declarations: [
    CommentsListPage,
  ],
  imports: [
    CommentsComponentModule,
    FooterComponentModule,
    IonicPageModule.forChild(CommentsListPage),
  ],
  exports: [
    CommentsListPage
  ]
})
export class CommentsListPageModule {}
