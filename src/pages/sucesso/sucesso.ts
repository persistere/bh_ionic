import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { PreHomePage } from '../pre-home/pre-home'

import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-sucesso',
  templateUrl: 'sucesso.html',
})
export class SucessoPage {

  constructor(public navCtrl: NavController, 
  				    public navParams: NavParams,
              private viewCtrl: ViewController,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  	this.viewCtrl.showBackButton(false);
    console.log('ionViewDidLoad SucessoPage');
  }

  logout(){
    
    let taost = this.toastCtrl.create({duration: 3000, position: 'bottom'});

    this.fire.auth.signOut();

    taost.setMessage('Até logo...').present();


    this.navCtrl.push(PreHomePage);
  }

}
