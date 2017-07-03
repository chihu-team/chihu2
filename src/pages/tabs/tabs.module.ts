import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { WorkComponentModule } from '../../components/work/work.module';
import { CodePush } from '@ionic-native/code-push';

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
  ],
  providers: [
    CodePush
  ]
})
export class TabsPageModule {}