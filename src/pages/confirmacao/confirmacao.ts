import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { WsBarbersService } from '../../services/wsBarbers.service';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SucessoPage } from '../sucesso/sucesso';

import { AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-confirmacao',
  templateUrl: 'confirmacao.html',
})
export class ConfirmacaoPage {

  item: any;

  data: Observable<any>;

	public event = {
	    month: '2018-07-10',
	    timeStarts: '10:30'
	}


  @ViewChild('cep') cep;
  @ViewChild('endereco') endereco;
  @ViewChild('complemento') complemento;

  okEndereco:boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public http: Http) {
  }

  ionViewWillLoad() {

    this.item = this.navParams.get('item');

    
    // Observable.forkJoin().subscribe( data => {
    //   this.img = data[0];
    //   console.log(data)
    // })
    
  }

  
  pagamento() {

    let toast = this.toastCtrl.create({duration: 3000, position: 'bottom'})

    if(this.cep.value == '' ){
      toast.setMessage('Preencha o cep do local').present();   
    }else{
      if(this.endereco.value == '' ){
        toast.setMessage('Preencha o endereço').present();  
      }else{
         if(this.complemento.value == '' ){
          toast.setMessage('De mais referencias').present();  
         }else{
             this.okEndereco = true;
           } 
         }
      } 


    if(this.okEndereco){
      const confirm = this.alertCtrl.create({
        title: 'Tem certeza que deseja chamar o barbeiro?',
        message: 'Após clicar em confirmar o barbeiro irá até o local escolhido no dia e na hora selecionados',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.salvarAgendamento();
            }
          }
        ]
      });
      confirm.present();
    }

  } //end pagamento


  salvarAgendamento(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    var url = 'http://barberinhome.com.br/app/rest/wsAddAgenda';
    let postData = new FormData();

    postData.append('cep', this.cep.value);
    postData.append('endereco', this.endereco.value);
    postData.append('complemento' ,this.complemento.value);
    postData.append('dia', 'dia');
    postData.append('hora', 'hora');

    this.data = this.http.post(url, postData, {headers});
    this.data.subscribe(data => {
      console.log(data);
    })


    this.navCtrl.push(SucessoPage);
  }


}
