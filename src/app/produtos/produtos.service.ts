import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient:HttpClient) { }

  obter(){
    return this.httpClient.get(`${environment.urlApi}produtos`)
  }

  inserir(){
    return this.httpClient.post(`${environment.urlApi}produtos`,{})
  }
}
