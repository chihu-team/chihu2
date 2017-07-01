import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkClassPage } from './work-class';

@NgModule({
  declarations: [
    WorkClassPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkClassPage),
  ],
  exports: [
    WorkClassPage
  ]
})
export class WorkClassPageModule {}
