import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PagamentoPage } from '../pagamento/pagamento';


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
    
    
    
  }

  pagamento() {
  	this.navCtrl.push(PagamentoPage);
  }

}
