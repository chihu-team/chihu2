import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWorkPage } from './my-work';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    MyWorkPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(MyWorkPage),
  ],
  exports: [
    MyWorkPage
  ]
})
export class MyWorkPageModule {}
