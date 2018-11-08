import { UsuarioModel } from './usuario.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlProdutoApi = `${environment.urlApi}produtos`;
  constructor(private httpClient:HttpClient) { }

  obter(){
    return this.httpClient.get<UsuarioModel[]>(this.urlProdutoApi)
  }
  obterId(id:number){
    return this.httpClient
    .get<UsuarioModel>(`${this.urlProdutoApi}/${id}`);
  }
  inserir(modelo:UsuarioModel){
    return this.httpClient.post(this.urlProdutoApi,modelo)
  }
  alterar(modelo:UsuarioModel){
    return this.httpClient
    .put(`${this.urlProdutoApi}/${modelo.id}`,modelo);
  }
  
  remover(id){
    return this.httpClient
    .delete(`${this.urlProdutoApi}/${id}`)
  }
}
