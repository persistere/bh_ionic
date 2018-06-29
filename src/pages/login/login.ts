import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ListaPage } from '../lista/lista';

import { Users } from './users';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  okLogin:boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toasCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  entrar() {
    let toast = this.toasCtrl.create({duration: 2000, position: 'bottom'});

    
      if(this.email.value == '' ){
        toast.setMessage('Preencha o e-mail').present();  
      }else {
        if(this.password.value == '' ){
          toast.setMessage('Preencha a senha').present();  
         }else{
           this.okLogin = true;
         }
      }

      if(this.okLogin) {
      this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then( data => {
        this.navCtrl.push(ListaPage);
      })
      .catch((error: any)=> {
        if(error.code == 'auth/email-already-in-use'){
          toast.setMessage('E-mail ja em uso').present();  
        }else if(error.code == 'auth/invalid-email'){
          toast.setMessage('E-mail nao valido').present();  
        }else if(error.code == 'auth/operation-not-allowed'){
          toast.setMessage('Habilitacao de usuario').present();  
        }else if(error.code == 'auth/weak-password'){
          toast.setMessage('Senha fraca').present();  
        }
      })
    }
       
    
  	
  }

}
