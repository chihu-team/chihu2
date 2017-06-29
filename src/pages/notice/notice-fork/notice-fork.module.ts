import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeForkPage } from './notice-fork';
import { MesItemComponentModule } from '../../../components/mes-item/mes-item.module';


@NgModule({
  declarations: [
    NoticeForkPage,
  ],
  imports: [
    MesItemComponentModule,
    IonicPageModule.forChild(NoticeForkPage),
  ],
  exports: [
    NoticeForkPage
  ]
})
export class NoticeForkPageModule {}
