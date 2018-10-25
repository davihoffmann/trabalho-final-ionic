import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SaveProfessorPage } from './save-professor.page';
import {SendButtonComponent} from '../../components/send-button/send-button.component';

const routes: Routes = [
  {
    path: '',
    component: SaveProfessorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
      SaveProfessorPage,
      SendButtonComponent
  ]
})
export class SaveProfessorPageModule {}
