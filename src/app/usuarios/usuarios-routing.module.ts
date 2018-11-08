import { Routes, RouterModule } from "@angular/router";
import { UsuariosComponent } from "./usuarios.component";
import { NgModule } from "@angular/core";
import { UsuariosFormComponent } from "./usuarios-form/usuarios-form.component";

const routes: Routes = [
    {
      component:UsuariosComponent,
      path:''
    },
    {
      path:'inserir',
      component:UsuariosFormComponent
    },
    {
      path:'editar/:id',
      component:UsuariosFormComponent,
    //   resolve:{
    //     Usuarios:UsuariosResolver
    //   }
    ]

    
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuariosRoutingModule { }