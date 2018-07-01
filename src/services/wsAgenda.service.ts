import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class WsAgendaService {
	constructor(public http: Http){

	}

	getAgenda() {
		return this.http.get(Config.WSAGENDA).map(res => res.json());
	}
}
