import { UsuarioModel } from './../usuario.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html'
})
export class UsuariosFormComponent implements OnInit {
  tituloCard = 'Inserir';
  model: UsuarioModel;

  @ViewChild('campoFoco') campoFoco:ElementRef;
  formularioUsuario:FormGroup;

  constructor(private router: Router,
    private rotaAtiva: ActivatedRoute,
    private usuarioService:UsuariosService) { 
    this.model = new UsuarioModel();

    
  }

  ngOnInit() {
    if(this.rotaAtiva.snapshot.params.id){
      this.model = this.rotaAtiva.snapshot.data['usuarios'];
      console.log(this.rotaAtiva.snapshot.data);
      this.tituloCard = 'Editar';
    }
    this.formularioUsuario =new FormGroup({
      id:new FormControl(this.model.id),
      codigo:new FormControl(this.model.codigo,Validators.required),
      nome:new FormControl(this.model.nome,Validators.required),
      senha:new FormControl(this.model.senha,Validators.required),
      ehAdmin:new FormControl(this.model.ehAdmin),
      status:new FormControl(this.model.status),
    })
  }

  salvar(model:UsuarioModel){
    if (!model.id) {
      this.usuarioService.inserir(model)
        .subscribe((s) => {
          this.formularioUsuario.reset();
          this.campoFoco.nativeElement.focus();
        })
    } else{
      this.usuarioService.alterar(model)
        .subscribe(s => {
          this.router.navigate(["/usuarios"])
        })
        
    }
  }
}
