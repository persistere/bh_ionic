import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ConfirmacaoPage } from '../confirmacao/confirmacao';

import { WsBarbersService } from '../../services/wsBarbers.service';

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  posts: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public wsBarbersService: WsBarbersService) {
  }

  ionViewDidLoad() {
    if(!(this.posts.length > 0)){
      let loading = this.loadingController.create();
      loading.present();


      this.wsBarbersService.getbarbers()
      .subscribe(data => {
        console.log("------------------>")
        console.log(data.barbers)
        console.log("------------------>")
        for (let post of data.barbers) {
          this.posts.push(post)
        }
        loading.dismiss();
      });

    }
  }

  confirmacao(){
  	this.navCtrl.push(ConfirmacaoPage);
  }

}
