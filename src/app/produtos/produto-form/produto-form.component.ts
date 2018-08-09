import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ProdutoModel } from '../produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styles: []
})
export class ProdutoFormComponent implements OnInit {
  
  tituloCard = 'Inserir';
  @ViewChild('campoFoco') campoFoco:ElementRef; 
  @ViewChild('f') form:NgForm; 
  formularioProduto:FormGroup;
  foto:File;
  previewImagem:string;
  constructor() { 
    this.formularioProduto = new FormGroup({
      id:new FormControl(''),
      codigo:new FormControl('',Validators.required),
      nome:new FormControl('',Validators.required),
      sku: new FormControl(''),
      marca: new FormControl(''),
      preco: new FormControl('',Validators.required),
      peso: new FormControl('',Validators.required),
      categoria: new FormControl('',Validators.required),
      variacao:new FormControl('',Validators.required),
      imagem:new FormControl('')
    })
  }

  ngOnInit() {
  }
  
  salvar(model:ProdutoModel){
    model.imagem = this.previewImagem;
    if (!model.id) {
      this.categoriaService.inserir(this.model)
        .subscribe((s) => {
          console.log(s);
          this.form.resetForm();
          this.campoFoco.nativeElement.focus();
        })
    } else{
      this.categoriaService.alterar(this.model)
        .subscribe(s => {
          this.router.navigate(["/categorias"])
        })
        
    }
  }

  converterImagemParaBase64(foto:File){
    this.foto = foto;
    const leitor = new FileReader();
    leitor.onload = (event:any) => {
      this.previewImagem=event.target.result;
      console.log(this.previewImagem)
    }
    leitor.readAsDataURL(foto);
  }
}
