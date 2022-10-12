import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresoIngresoCompComponent} from './components/egreso-ingreso-comp/egreso-ingreso-comp.component'
import { BaseType } from 'd3-selection';
const routes: Routes = [
  {path: 'obtener_movimientos', component: EgresoIngresoCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
