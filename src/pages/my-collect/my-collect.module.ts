import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCollectPage } from './my-collect';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MyCollectPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCollectPage),
    SuperTabsModule.forRoot()
  ],
  exports: [
    MyCollectPage
  ]
})
export class MyCollectPageModule {}
