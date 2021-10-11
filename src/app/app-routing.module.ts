import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApresentacaoRoutes } from './apresentacao/apresentacao-routing.module';
import { ComofasRoutes } from './comofas/comofas-routing.module';
import { MadeOfRoutes } from './made-of/made-of-routing.module';
import { PraQueServeRoutes } from './pra-que-serve/pra-que-serve-routing.module';

const routes: Routes = [
  {
    path: '',
        redirectTo: '/apresentacao',
        pathMatch: 'full'
  },
  ...ApresentacaoRoutes,
  ...MadeOfRoutes,
  ...PraQueServeRoutes,
  ...ComofasRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
