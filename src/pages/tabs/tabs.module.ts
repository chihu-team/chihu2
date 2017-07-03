import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { WorkComponentModule } from '../../components/work/work.module';
import { CodePush } from '@ionic-native/code-push';
import { AppVersion } from '@ionic-native/app-version';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

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
    CodePush,
    AppVersion,
    FileOpener,
    Transfer,
    TransferObject,
    File
  ]
})
export class TabsPageModule {}