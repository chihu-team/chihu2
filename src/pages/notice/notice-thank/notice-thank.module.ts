import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeThankPage } from './notice-thank';
import { MesItemComponentModule } from '../../../components/mes-item/mes-item.module';


@NgModule({
  declarations: [
    NoticeThankPage,
  ],
  imports: [
    MesItemComponentModule,
    IonicPageModule.forChild(NoticeThankPage),
  ],
  exports: [
    NoticeThankPage
  ]
})
export class NoticeThankPageModule {}
