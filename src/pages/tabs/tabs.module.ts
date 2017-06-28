import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { WorkComponentModule } from '../../components/work/work.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    WorkComponentModule,
    IonicPageModule.forChild(TabsPage)
  ],
  exports: [
    TabsPage
  ]
})
export class TabsPageModule {}