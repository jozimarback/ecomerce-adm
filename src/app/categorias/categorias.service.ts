import { CategoriaModel } from './categoria-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  urlCategoriaApi = `${environment.urlApi}categorias`;
  constructor(private httpClient:HttpClient) { }

  obter():Observable<CategoriaModel[]>{
    return this.httpClient
    .get<CategoriaModel[]>(this.urlCategoriaApi);
    // return localStorage.getItem('categorias') || [];
  }

  
  obterId(id:number){
    return this.httpClient
    .get<CategoriaModel>(`${this.urlCategoriaApi}/${id}`);
  }

  inserir = (modelo) => this.httpClient
    .post(this.urlCategoriaApi,modelo);
    // var lsCategorias = localStorage.getItem('categorias');
    // var categorias = (lsCategorias)? JSON.parse(lsCategorias) : [];
    
    // localStorage.setItem('categorias',categorias.push(modelo))
  

  alterar(modelo:CategoriaModel){
    return this.httpClient
    .put(`${this.urlCategoriaApi}/${modelo.id}`,modelo);
    // var categorias = JSON.parse(localStorage.getItem('categorias'));
    
    // categorias = categorias
    //   .map(cat => {
    //     if(cat.codigo == modelo.codigo)
    //       cat = modelo;
    //     return cat;
    //   });


    // localStorage.setItem('categorias',categorias);
  }

  remover(id){
    return this.httpClient
    .delete(`${this.urlCategoriaApi}/${id}`)
    // var categorias = JSON.parse(localStorage.getItem('categorias'));
    // localStorage.setItem('categorias',categorias
    // .splice(categorias
    //   .findIndex(f => f.codigo !== modelo.codigo),1));
    // localStorage.setItem('categorias',categorias.filter(f => f.codigo !== modelo.codigo));
  }
}
