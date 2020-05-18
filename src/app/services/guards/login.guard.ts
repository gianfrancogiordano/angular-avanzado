import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from "../usuario/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( public _usuarioService: UsuarioService,
               private _router: Router) {
  }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Paso por el login Guard');

    if (this._usuarioService.isLog()) {
      return true;
    } else {

      this._router.navigate(['/login']);
      return false;
    }

  }

}
