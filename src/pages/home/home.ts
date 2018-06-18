import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  entrar() {
  	this.navCtrl.push(ListaPage);
  }

}
