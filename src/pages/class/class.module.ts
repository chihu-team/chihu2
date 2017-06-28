import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassPage } from './class';


@NgModule({
  declarations: [
    ClassPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassPage)
  ],
  exports: [
    ClassPage
  ]
})
export class ClassPageModule {}
