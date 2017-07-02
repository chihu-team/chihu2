import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenSharePage } from './open-share';
import { ShareComponentModule } from './share/share.module';
import { CommentsComponentModule } from '../../components/comments/comments.module';
import { FooterComponentModule } from './footer/footer.module'

@NgModule({
  declarations: [
    OpenSharePage,
  ],
  imports: [
    ShareComponentModule,
    CommentsComponentModule,
    FooterComponentModule,
    IonicPageModule.forChild(OpenSharePage),
  ],
  exports: [
    OpenSharePage
  ]
})
export class OpenSharePageModule {}
