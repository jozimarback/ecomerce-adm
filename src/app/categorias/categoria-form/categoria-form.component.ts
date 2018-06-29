import { Component, OnInit } from '@angular/core';
import { Inativo } from '../../shared/utils/inativo.enum';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styles: []
})
export class CategoriaFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Object.keys(Inativo)
  }
salvar(){
  
}
}
