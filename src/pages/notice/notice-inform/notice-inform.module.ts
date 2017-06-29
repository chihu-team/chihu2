import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeInformPage } from './notice-inform';
import { MesItemComponentModule } from '../../../components/mes-item/mes-item.module';

@NgModule({
  declarations: [
    NoticeInformPage,
  ],
  imports: [
    MesItemComponentModule,
    IonicPageModule.forChild(NoticeInformPage),
  ],
  exports: [
    NoticeInformPage
  ]
})
export class NoticeInformPageModule {}
