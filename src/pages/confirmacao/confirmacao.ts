import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WsBarbersService } from '../../services/wsBarbers.service';

import { SucessoPage } from '../sucesso/sucesso';



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
              public navParams: NavParams) {
  }

  ionViewWillLoad() {

    this.item = this.navParams.get('item');

    
    // Observable.forkJoin().subscribe( data => {
    //   this.img = data[0];
    //   console.log(data)
    // })
    
  }

  pagamento() {
  	this.navCtrl.push(SucessoPage);
  }

}
