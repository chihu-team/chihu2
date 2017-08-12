import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { MesItemComponentModule } from './mes-item/mes-item.module'

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    MesItemComponentModule
  ],
  exports: [
    MessagePage
  ]
})
export class MessagePageModule {}
