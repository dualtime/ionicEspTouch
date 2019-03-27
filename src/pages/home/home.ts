import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare let esptouch;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startConfig() {
    esptouch.start(
      "MBF_Lounge",
      "00:50:7f:f1:17:cc",
      "bfmafra2016",
      "0",
      "1",
      (res: any) => {
        console.log(res)
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  stopConfig() {
    esptouch.stop(
      (res: any) => {
        console.log(res)
      },
      (err: any) => {
        console.log(err)
      }
    )
  }
}
