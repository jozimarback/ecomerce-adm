import { Routes, RouterModule } from "@angular/router";
import { UsuariosComponent } from "./usuarios.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      component:UsuariosComponent,
      path:''
    }]

    
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuariosRoutingModule { }