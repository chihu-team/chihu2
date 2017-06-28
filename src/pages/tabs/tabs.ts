import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = 'HomePage';
  tabClass = 'ClassPage';
  tabNotice = 'NoticePage';
  tabFound = 'FoundPage';
  tabMore = 'MorePage';

  constructor() {

  }
}
