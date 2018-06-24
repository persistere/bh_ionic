import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ListaPage } from '../lista/lista';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-pre-home',
  templateUrl: 'pre-home.html',
})
export class PreHomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private viewCtrl: ViewController) {
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
	}

  
  entrar() {
  	this.navCtrl.push(ListaPage);
  }

  cadastrar() {
  	this.navCtrl.push(CadastroPage);
  }

  logar() {
  	this.navCtrl.push(LoginPage);
  }

}
