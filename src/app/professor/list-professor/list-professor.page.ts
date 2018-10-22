import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../../services/professor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.page.html',
  styleUrls: ['./list-professor.page.scss'],
})
export class ListProfessorPage implements OnInit {

  public list: any;
  public mensagem: string;

  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit() {
    this.professorService.getProfessores('http://173.82.104.22:5000/teachers')
      .subscribe(data => {
          this.list = data;
          console.log('Lista de Professores: ', this.list);
      });
  }

  professorDatail(professor) {
      this.professorService.currentProfessor = professor;
      this.router.navigate(['/datail-professor']);
  }
}
