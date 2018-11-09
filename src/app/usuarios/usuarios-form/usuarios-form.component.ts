import { UsuarioModel } from './../usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html'
})
export class UsuariosFormComponent implements OnInit {
  tituloCard = 'Inserir';
  @ViewChild('campoFoco') campoFoco:ElementRef;
  formularioUsuario:FormGroup;

  constructor(private router: Router,private usuarioService:UsuariosService) { 
    this.formularioUsuario =new FormGroup({
      id:new FormControl(''),
      codigo:new FormControl('',Validators.required),
      nome:new FormControl('',Validators.required),
      status:new FormControl(''),
    })
  }

  ngOnInit() {
  }

  salvar(model:UsuarioModel){
    if (!model.id) {
      this.usuarioService.inserir(model)
        .subscribe((s) => {
          console.log(s);
          this.formularioUsuario.reset();
          this.campoFoco.nativeElement.focus();
        })
    } else{
      this.usuarioService.alterar(model)
        .subscribe(s => {
          this.router.navigate(["/produtos"])
        })
        
    }
  }
}
