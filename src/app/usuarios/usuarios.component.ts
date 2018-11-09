import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from './usuario.model';
import { Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios:Observable<UsuarioModel[]>;

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {
    this.obterUsuarios();
  }
  obterUsuarios(){
    this.usuarios = this.usuariosService.obter();
  }

  excluirProduto(id){
    this.usuariosService.remover(id)
      .toPromise()
      .then(() => this.obterUsuarios());
  }
}
