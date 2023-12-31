import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionComponent } from './paginas/calificacion/calificacion.component';
import { Apirest1Component } from './paginas/apirest1/apirest1.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../angularmaterial/material.module';
import { ListadoComponent } from './paginas/apitest/listado/listado.component';
import { DetalleComponent } from './paginas/apitest/detalle/detalle.component';
import { ApitestComponent } from './paginas/apitest/apitest.component';


@NgModule({
  declarations: [
    CalificacionComponent,
    Apirest1Component,
    ListadoComponent,
    DetalleComponent,
    ApitestComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
  ]
})
export class Cl3Module { }
