import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommentsComponent } from './comments';

@NgModule({
  declarations: [
    CommentsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsComponentModule {}
