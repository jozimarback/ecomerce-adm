import { ProdutoModel } from './produto.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  urlProdutoApi = `${environment.urlApi}produtos`;
  constructor(private httpClient:HttpClient) { }

  obter(){
    return this.httpClient.get<ProdutoModel[]>(this.urlProdutoApi)
  }
  obterId(id:number){
    return this.httpClient
    .get<ProdutoModel>(`${this.urlProdutoApi}/${id}`);
  }
  inserir(modelo:ProdutoModel){
    return this.httpClient.post(this.urlProdutoApi,modelo)
  }
  alterar(modelo:ProdutoModel){
    return this.httpClient
    .put(`${this.urlProdutoApi}/${modelo.id}`,modelo);
  }
  
  remover(id){
    return this.httpClient
    .delete(`${this.urlProdutoApi}/${id}`)
  }
}
