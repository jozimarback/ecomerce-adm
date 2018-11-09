import { LoginService } from './login.service';
import { UsuarioModel } from './../usuarios/usuario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formularioLogin:FormGroup;
  constructor(private loginService:LoginService) { 
    this.formularioLogin = new FormGroup({
      codigo:new FormControl('',Validators.required),
      senha:new FormControl('',Validators.required),
    })

  }

  ngOnInit() {
  }
  logar(model:UsuarioModel){
    console.log(model);
    this.loginService.logar(model);
  }
}
