import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { ProdutoModel } from './produto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  providers: [ProdutosService],
  styles: []
})
export class ProdutosComponent implements OnInit {
  produtos:Observable<ProdutoModel[]>;
  constructor(private produtosService:ProdutosService) { }

  ngOnInit() {
    this.obterProdutos();
  }
  obterProdutos(){
    this.produtos = this.produtosService.obter();
  }

  excluirProduto(id){
    this.produtosService.remover(id)
      .toPromise()
      .then(() => this.obterProdutos());
  }

}
