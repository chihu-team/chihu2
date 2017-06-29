import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassPage } from './class';
import { ClassItemComponentModule } from '../../components/class-item/class-item.module';

@NgModule({
  declarations: [
    ClassPage,
  ],
  imports: [
    ClassItemComponentModule,
    IonicPageModule.forChild(ClassPage)
  ],
  exports: [
    ClassPage
  ]
})
export class ClassPageModule {}
