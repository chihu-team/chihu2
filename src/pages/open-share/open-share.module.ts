import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenSharePage } from './open-share';
import { ShareComponentModule } from './share/share.module';
import { CommentsComponentModule } from '../../components/comments/comments.module';


@NgModule({
  declarations: [
    OpenSharePage,
  ],
  imports: [
    ShareComponentModule,
    CommentsComponentModule,
    IonicPageModule.forChild(OpenSharePage),
  ],
  exports: [
    OpenSharePage
  ]
})
export class OpenSharePageModule {}
