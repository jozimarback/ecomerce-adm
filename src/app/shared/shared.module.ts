import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, SidebarComponent, InputComponent],
  exports:[
    NavbarComponent,
    SidebarComponent,
    InputComponent
  ]
})
export class SharedModule { }
