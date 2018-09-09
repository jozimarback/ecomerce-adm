import { ProdutosService } from '../produtos.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {  FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ProdutoModel } from '../produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styles: []
})
export class ProdutoFormComponent implements OnInit {
  
  tituloCard = 'Inserir';
  @ViewChild('campoFoco') campoFoco:ElementRef; 
  formularioProduto:FormGroup;
  foto:File;
  previewImagem:string;
  constructor(private router: Router,private produtoService:ProdutosService) { 
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
      this.produtoService.inserir(model)
        .subscribe((s) => {
          console.log(s);
          this.formularioProduto.reset();
          this.campoFoco.nativeElement.focus();
        })
    } else{
      this.produtoService.alterar(model)
        .subscribe(s => {
          this.router.navigate(["/produtos"])
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
