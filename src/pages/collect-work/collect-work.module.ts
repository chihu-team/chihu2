import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectWorkPage } from './collect-work';
import { WorkComponentModule } from './work/work.module';

@NgModule({
  declarations: [
    CollectWorkPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(CollectWorkPage),
  ],
  exports: [
    CollectWorkPage
  ]
})
export class CollectWorkPageModule {}
