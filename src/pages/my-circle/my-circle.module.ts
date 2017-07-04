import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCirclePage } from './my-circle';
import { ShareComponentModule } from '../../components/share/share.module';

@NgModule({
  declarations: [
    MyCirclePage,
  ],
  imports: [
    ShareComponentModule,
    IonicPageModule.forChild(MyCirclePage),
  ],
  exports: [
    MyCirclePage
  ]
})
export class MyCirclePageModule {}
