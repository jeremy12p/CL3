import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CL3Component } from './cl3/cl3.component';
import { CalificacionComponent } from './cl3/paginas/calificacion/calificacion.component';
import { Apirest1Component } from './cl3/paginas/apirest1/apirest1.component';
import { Apirest2Component } from './cl3/paginas/apirest2/apirest2.component';


const routes: Routes = [

  { 
      path: '', 
      component: CalificacionComponent
      ,
      pathMatch: 'full'
  },
  { 
      path: 'apirest1',
      component: Apirest1Component
  },
  { 
      path: 'apirest2',
      component: Apirest2Component
  },
  { 
      path: '**',
      redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
