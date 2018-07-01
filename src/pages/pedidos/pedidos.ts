import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';

import { WsAgendaService } from '../../services/wsAgenda.service';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  posts: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingController: LoadingController,
              public wsAgendaService: WsAgendaService,
              private viewCtrl: ViewController) {
  }

  
  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);

    this.loadAgenda(); 
  }

  loadAgenda(){
    if(!(this.posts.length > 0)){
      let loading = this.loadingController.create();
      loading.present();


      this.wsAgendaService.getAgenda()
      .subscribe(data => {
        for (let post of data.barbers) {
          this.posts.push(post)
        }
        loading.dismiss();
      });
    }
  }

}
