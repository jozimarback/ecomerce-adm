import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdutoModel } from '../produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styles: []
})
export class ProdutoFormComponent implements OnInit {
  formularioProduto:FormGroup;
  constructor() { 
    this.formularioProduto = new FormGroup({
      codigo:new FormControl('',Validators.required),
      nome:new FormControl('',Validators.required),
      sku: new FormControl(''),
      marca: new FormControl(''),
      preco: new FormControl('',Validators.required),
      peso: new FormControl('',Validators.required),
      categorias: new FormControl('',Validators.required),
      variacoes:new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  }
  
  salvar(model:ProdutoModel){
    console.log(model);
  }
}
