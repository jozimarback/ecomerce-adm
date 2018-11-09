import { environment } from './../../environments/environment';
import { UsuarioModel } from './../usuarios/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '../../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  logar(model:UsuarioModel){
    this.httpClient.get(`${environment.urlApi}usuarios`)
    .subscribe((a:UsuarioModel[]) => {
      var usuario = a.find(f => f.codigo == model.codigo && f.senha == model.senha);
      console.log(usuario);
      if(usuario != null){
        localStorage.setItem('u',JSON.stringify(usuario))
        this.router.navigate(["/"])
      }
  })
  }

  sair(){
    localStorage.removeItem('u')
    this.router.navigate(["/login"])
  }

}
