import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WsBarbersService } from '../../services/wsBarbers.service';

import { SucessoPage } from '../sucesso/sucesso';

import { AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-confirmacao',
  templateUrl: 'confirmacao.html',
})
export class ConfirmacaoPage {

  item: any;

	public event = {
	    month: '2018-07-10',
	    timeStarts: '10:30'
	}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewWillLoad() {

    this.item = this.navParams.get('item');

    
    // Observable.forkJoin().subscribe( data => {
    //   this.img = data[0];
    //   console.log(data)
    // })
    
  }

  
  pagamento() {

    const confirm = this.alertCtrl.create({
      title: 'Tem certeza que deseja chamar o barbeiro?',
      message: 'Após clicar em confirmar o barbeiro irá até o local escolhido no dia e na hora selecionados',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(SucessoPage);
          }
        }
      ]
    });
    confirm.present();
  }

}
