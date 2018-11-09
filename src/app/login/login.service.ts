import { environment } from './../../environments/environment';
import { UsuarioModel } from './../usuarios/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  logar(model:UsuarioModel){
    this.httpClient.get(`${environment.urlApi}usuario`)
    .subscribe((a:UsuarioModel[]) => {
      var usuario = a.find(f => f.codigo == model.codigo && f.senha == model.senha);
      if(usuario != null){
        localStorage.setItem('u',JSON.stringify(usuario))
      }
  })
  }

}
