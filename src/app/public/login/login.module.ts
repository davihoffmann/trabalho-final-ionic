import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {EsqueceuSenhaPage} from '../esqueceu-senha/esqueceu-senha.page';
import {SendButtonComponent} from '../../components/send-button/send-button.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage, EsqueceuSenhaPage, SendButtonComponent],
  entryComponents: [EsqueceuSenhaPage]
})
export class LoginPageModule {}
