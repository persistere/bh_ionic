import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PagamentoPage } from '../pagamento/pagamento';

/**
 * Generated class for the ConfirmacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmacao',
  templateUrl: 'confirmacao.html',
})
export class ConfirmacaoPage {

	public event = {
	    month: '2018-02-19',
	    timeStarts: '07:43'
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmacaoPage');
  }

  pagamento() {
  	this.navCtrl.push(PagamentoPage);
  }

}
