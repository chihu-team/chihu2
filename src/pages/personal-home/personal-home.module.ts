import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHomePage } from './personal-home';

@NgModule({
  declarations: [
    PersonalHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalHomePage),
  ],
  exports: [
    PersonalHomePage
  ]
})
export class PersonalHomePageModule {}
