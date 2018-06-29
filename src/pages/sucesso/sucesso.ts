import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sucesso',
  templateUrl: 'sucesso.html',
})
export class SucessoPage {

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
              	private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  	this.viewCtrl.showBackButton(false);
    console.log('ionViewDidLoad SucessoPage');
  }

}
