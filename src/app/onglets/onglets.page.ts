import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.page.html',
  styleUrls: ['./onglets.page.scss'],
})
export class OngletsPage implements OnInit {

  selectTab: any;
  @ViewChild('tabs') tabs!: IonTabs;

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab(event:any) {
    console.log(event);
    console.log(this.tabs.getSelected());
    this.selectTab = this.tabs.getSelected();
  }
}
