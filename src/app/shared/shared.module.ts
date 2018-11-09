import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './input/input.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, SidebarComponent, InputComponent, AdminLayoutComponent],
  exports:[
    NavbarComponent,
    SidebarComponent,
    InputComponent
  ]
})
export class SharedModule { }
