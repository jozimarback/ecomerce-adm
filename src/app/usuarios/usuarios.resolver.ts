import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { UsuarioModel } from "./usuario.model";


@Injectable({ providedIn: 'root'})
export class UsuarioResolver implements Resolve<Observable<UsuarioModel>> {
    constructor(private service: UsuariosService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsuarioModel> {
        const id = route.params.id;
        return this.service.obterId(id);
    }
}