import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Screenshot } from 'capacitor-screenshot';
// import * as html2canvas from 'html2canvas';
import html2canvas from 'html2canvas';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


import {ModalController} from '@ionic/angular';
import { Camera } from '@capacitor/camera';
// import {Screenshot} from "@ionic-native/screenshot/ngx";

@Component({
  selector: 'app-ar-laucher',
  templateUrl: './ar-laucher.page.html',
  styleUrls: ['./ar-laucher.page.scss'],
})
export class ArLaucherPage implements OnInit {

  @ViewChild('arFrame') arFrame!: ElementRef;

  test!:string;

  constructor(
    private modalCtrl: ModalController,
    private socialSharing: SocialSharing,
    // private screenshot: Screenshot
  ) { }


  testSharing(){
    this.socialSharing.share("Message ", "title ", "image to share url ", "https://restcountries.com/v3.1/all")
      .then(res =>
      { console.log('Launched view!', res)
      }) .catch(err => {
      console.log('Error launching view', err)
    });
  }

  captureScreen() {

    // setTimeout(()=>{
    //   this.screenshot.URI().then(
    //     (result) => {
    //       this.test = result.URI;
    //       console.log(result);
    //       // Partager l'image capturée via les réseaux sociaux
    //       this.socialSharing.share("Message partagé", "ARScreenshot", result.URI, "https://restcountries.com/v3.1/all");
    //     },
    //     (error) => {
    //       console.error('Erreur lors de la capture d\'écran :', error);
    //     }
    //   );
    // }, 1000);

    Screenshot.take().then((ret) => {
      console.log(ret); // or `data:image/png;base64,${ret.base64}`
      console.log(ret.base64); // or `data:image/png;base64,${ret.base64}`
      this.socialSharing.saveToPhotoAlbum(ret.base64);
      this.socialSharing.canShareViaEmail().then(() => {
        this.socialSharing.shareViaEmail('VOici Vos donnees capture', 'SchoolX', ['jerry.wafo@institutsaintjean.org']).then(() => {
          // Success!
         }).catch(() => {
          // Error!
         });
       }).catch(() => {
        // Sharing via email is not possible
       });
      this.socialSharing.share("Message partagé", "SchoolX", ret.base64, "https://restcountries.com/v3.1/all");
    });
    this.socialSharing.shareViaEmail('VOici Vos donnees capture', 'SchoolX', ['jerry.wafo@institutsaintjean.org']).then(() => {
      // Success!
     }).catch(() => {
      // Error!
     });



  }




  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }

}


    // const iframeElement = this.arFrame.nativeElement;
    //
    // const test = document.getElementById("test");
    //
    // // @ts-ignore
    // html2canvas(test).then((canvas) => {
    //   console.log('Capture d\'écran réussie:', canvas);
    //   const imgData :string = canvas.toDataURL('image/jpg');
    //   const img = new Image();
    //   img.src = imgData;
    //   this.test = imgData;
    //   console.log(imgData);
    //
    //   // Continuez avec le partage
    //   this.socialSharing.share("Message partagé", 'ARScreenshot', imgData, "https://restcountries.com/v3.1/all")
    //     .then(() => console.log('Capture d\'écran partagée avec succès'))
    //     .catch((error) => console.error('Erreur lors du partage : ', error));
    // })
    //   .catch((error:any) => {
    //     console.error('Erreur lors de la capture d\'écran : ', error);
    //   });