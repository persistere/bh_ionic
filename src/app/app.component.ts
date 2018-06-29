import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PreHomePage } from '../pages/pre-home/pre-home';

import { HomePage } from '../pages/home/home';

import { ListaPage } from '../pages/lista/lista';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;

  constructor(platform: Platform, 
  				statusBar: StatusBar, 
  				splashScreen: SplashScreen,
  				afAuth: AngularFireAuth ) {

  	const authObserver = afAuth.authState.subscribe(users => {
  		if(users){
  			this.rootPage = ListaPage;
  			authObserver.unsubscribe();
  		}else{
  			this.rootPage = HomePage
  			authObserver.unsubscribe();
  		}
  	})


    platform.ready().then(() => {
  			
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

