import { CategoriasService } from './../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private categoriasService:CategoriasService) { }
  nome:string = "";
  waterLandRatio = [{
    name: 'Land',
    area: 0.29
}, {
    name: 'Water',
    area: 0.71
}];
  graficoCategoria = []
  ngOnInit() {
    this.categoriasService.obter()
    .subscribe(s => {
      this.graficoCategoria = [
        {
          name:'Ativo',
          area: s.reduce(function(f,categoria) {
            if(categoria.status == 0)
              return f+1;
            return f;  
          },0)
        },
        {
          name:'Inativo',
          area: s.reduce(function(f,categoria,t) {
            if(categoria.status == 1)
              return f+1;
            return f;
          },0)
        }
      ]
      console.log(this.graficoCategoria)
    })
  }

}
