import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'certificaciones',
    loadChildren: () => import('./certificaciones/certificaciones.module').then( m => m.CertificacionesPageModule)
  },
  {
    path: 'mis-datos',
    loadChildren: () => import('./mis-datos/mis-datos.module').then( m => m.MisDatosPageModule)
  },
  {
    path: 'exp-laboral',
    loadChildren: () => import('./exp-laboral/exp-laboral.module').then( m => m.ExpLaboralPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
