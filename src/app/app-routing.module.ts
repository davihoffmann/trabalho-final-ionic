import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'esqueceu_senha', loadChildren: './public/esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'list-professor', loadChildren: './professor/list-professor/list-professor.module#ListProfessorPageModule',
      canActivate: [AuthGuard] },
  { path: 'datail-professor', loadChildren: './professor/datail-professor/datail-professor.module#DatailProfessorPageModule',
      canActivate: [AuthGuard] },
  { path: 'save-professor', loadChildren: './professor/save-professor/save-professor.module#SaveProfessorPageModule',
      canActivate: [AuthGuard] },
  { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoPageModule',
      canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
