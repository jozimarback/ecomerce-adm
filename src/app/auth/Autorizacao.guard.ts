import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class AuthenticationGuard implements CanActivate{
    
    constructor(private router:Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let existeLocalStorageUsuario = !!(localStorage.getItem('u'));
        if(!existeLocalStorageUsuario){
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        }
        return existeLocalStorageUsuario;
    }
    
}