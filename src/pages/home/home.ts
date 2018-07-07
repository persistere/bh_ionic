import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListaPage } from '../lista/lista';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';
import { PreHomePage } from '../pre-home/pre-home';


import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  intro: boolean;

  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              private nativeStorage: NativeStorage) {

    this.intro = this.navParams.get('intro');
  }

  

  entrar() {
  	this.navCtrl.push(PreHomePage);
  }

  cadastrar() {
  	this.navCtrl.push(CadastroPage);
  }

  logar() {
  	this.navCtrl.push(LoginPage);
  }

}
