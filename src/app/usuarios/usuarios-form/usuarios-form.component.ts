import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html'
})
export class UsuariosFormComponent implements OnInit {

  formularioUsuario:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
