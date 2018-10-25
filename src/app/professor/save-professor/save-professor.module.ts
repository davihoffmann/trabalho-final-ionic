import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SaveProfessorPage} from './save-professor.page';

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
      SaveProfessorPage
  ]
})
export class SaveProfessorPageModule {}
