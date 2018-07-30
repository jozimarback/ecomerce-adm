import { CategoriasService } from './categorias.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CategoriaModel } from './categoria-model';

@Injectable({ providedIn: 'root'})
export class CategoriaResolver implements Resolve<Observable<CategoriaModel>> {
    constructor(private service: CategoriasService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoriaModel> {
        const id = route.params.id;
        return this.service.obterId(id);
    }
}