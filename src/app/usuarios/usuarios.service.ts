import { UsuarioModel } from './usuario.model';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlUsuarioApi = `${environment.urlApi}usuarios`;
  constructor(private httpClient:HttpClient) { }

  obter(){
    return this.httpClient.get<UsuarioModel[]>(this.urlUsuarioApi)
  }
  obterId(id:number){
    return this.httpClient
    .get<UsuarioModel>(`${this.urlUsuarioApi}/${id}`);
  }
  inserir(modelo:UsuarioModel){
    return this.httpClient.post(this.urlUsuarioApi,modelo)
  }
  alterar(modelo:UsuarioModel){
    return this.httpClient
    .put(`${this.urlUsuarioApi}/${modelo.id}`,modelo);
  }
  
  remover(id){
    return this.httpClient
    .delete(`${this.urlUsuarioApi}/${id}`)
  }
}
