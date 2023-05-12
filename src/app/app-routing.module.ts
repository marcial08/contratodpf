import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContratoComponent } from './contrato/contrato.component';

const routes: Routes = [
  { path: 'contratos/:nombre/:documentoIdentidad/:estadoCivil/:direccion/:fecha', component: ContratoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
