import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaPage } from '../pages/lista/lista';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConfirmacaoPage } from '../pages/confirmacao/confirmacao';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { NativeStorage } from '@ionic-native/native-storage';
import { BancoProvider } from '../providers/banco/banco';

import { WsBarbersService } from '../services/wsBarbers.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaPage,
    LoginPage,
    CadastroPage,
    AgendaPage,
    ConfirmacaoPage,
    PagamentoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaPage,
    LoginPage,
    CadastroPage,
    AgendaPage,
    ConfirmacaoPage,
    PagamentoPage
  ],
  providers: [
    StatusBar,
    NativeStorage,
    WsBarbersService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BancoProvider
  ]
})
export class AppModule {}
