import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyForkPage } from './my-fork';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    MyForkPage,
  ],
  imports: [
    IonicPageModule.forChild(MyForkPage),
    SuperTabsModule.forRoot()
  ],
  exports: [
    MyForkPage
  ]
})
export class MyForkPageModule {}
