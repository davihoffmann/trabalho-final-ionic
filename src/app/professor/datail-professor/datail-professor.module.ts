import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatailProfessorPage } from './datail-professor.page';

const routes: Routes = [
  {
    path: '',
    component: DatailProfessorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatailProfessorPage]
})
export class DatailProfessorPageModule {}
