import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArLaucherPage } from '../ar-laucher/ar-laucher.page';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  // async openAR() {
  //   const modal: HTMLIonModalElement = await this.modalController.create({
  //     component: ArLaucherPage,
  //     swipeToClose: true,
  //     presentingElement: this.routerOutlet.
  //   });
  
  //   return await modal.present();
  // }

}
