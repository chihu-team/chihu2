import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingPage } from './setting';
import { FileOpener } from '@ionic-native/file-opener';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { AppVersion } from '@ionic-native/app-version';

@NgModule({
  declarations: [
    SettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingPage),
  ],
  exports: [
    SettingPage
  ],
  providers: [
    FileOpener,
    Transfer,
    TransferObject,
    File,
    AppVersion
  ]
})
export class SettingPageModule {}
