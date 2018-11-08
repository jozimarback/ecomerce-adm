import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService<TModel extends any> {
  _path = "";
  urlProdutoApi = `${environment.urlApi}{TPath}`;
  constructor(public httpClient:HttpClient,path:string) {
    this._path = path;
   }

  obter(){
    return this.httpClient.get<TModel[]>(this.urlProdutoApi)
  }
  obterId(id:number){
    return this.httpClient
    .get<TModel>(`${this.urlProdutoApi}/${id}`);
  }
  inserir(modelo:TModel){
    return this.httpClient.post(this.urlProdutoApi,modelo)
  }
  alterar(modelo:TModel){
    return this.httpClient
    .put(`${this.urlProdutoApi}/${modelo.id}`,modelo);
  }
  
  remover(id){
    return this.httpClient
    .delete(`${this.urlProdutoApi}/${id}`)
  }
}
