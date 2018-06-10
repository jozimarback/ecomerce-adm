import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  providers: [ProdutosService],
  styles: []
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService:ProdutosService) { }

  ngOnInit() {
    this.produtosService.obter();
  }

}
