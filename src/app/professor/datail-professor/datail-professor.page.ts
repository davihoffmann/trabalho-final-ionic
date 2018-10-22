import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfessorService} from '../../services/professor.service';
import {AlertController, ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-datail-professor',
  templateUrl: './datail-professor.page.html',
  styleUrls: ['./datail-professor.page.scss'],
})
export class DatailProfessorPage implements OnInit {

  professor: any;
  mensagem: any;

  constructor(private professorService: ProfessorService, private router: Router, public alertController: AlertController,
              public actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
    this.professor = this.professorService.currentProfessor;
  }
}
