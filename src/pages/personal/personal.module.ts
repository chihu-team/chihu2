import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPage } from './personal';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    PersonalPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalPage),
    SuperTabsModule.forRoot()
  ],
  exports: [
    PersonalPage
  ]
})
export class PersonalPageModule {}
