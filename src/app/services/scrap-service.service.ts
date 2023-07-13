import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScrapServiceService {

  constructor(private httpClient: HttpClient) { }


  pegarDadosScrap(placa: string, renavam: string, uf:string){
    return this.httpClient.get<any[]>(environment.urlScrapDev + '/debitos' + '?placa=' + placa + '&renavam=' +renavam + '&uf=' + uf.toUpperCase()).toPromise();
  }

}
