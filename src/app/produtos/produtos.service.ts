import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  public obter() {
    this.httpClient
      .get(`${environment.urlApi}produtos`)
      .subscribe(s => console.log(s))

  }

  inserir(produto) {
    this.httpClient.post(`${environment.urlApi}produtos`, produto)
      .subscribe();
  }

}
