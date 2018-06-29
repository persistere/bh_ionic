import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ListaPage } from '../lista/lista';
import { RecuperarPage } from '../recuperar/recuperar';

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
        if(error.code == 'auth/invalid-email'){
          toast.setMessage('E-mail invalido').present();  
        }else if(error.code == 'auth/user-disabled'){
          toast.setMessage('usuario desabilitado').present();  
        }else if(error.code == 'auth/user-not-found'){
          toast.setMessage('Habilitacao de usuario').present();  
        }else if(error.code == 'auth/wrong-password'){
          toast.setMessage('Senha errada').present();  
        }
      })
    }
  }

  recuperar(){
    this.navCtrl.push(RecuperarPage);
  }

}
