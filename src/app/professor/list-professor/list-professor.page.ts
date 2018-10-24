import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../../services/professor.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.page.html',
  styleUrls: ['./list-professor.page.scss'],
})
export class ListProfessorPage implements OnInit {

  public list: any;
  public mensagem: string;
  navigationSubscription;
  public filtro: string;

  constructor(private professorService: ProfessorService, private router: Router) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.init();
          }
      });
  }

  init() {
    this.listProfessores();
  }

  listProfessores() {
    this.professorService.getProfessores('http://173.82.104.22:5000/teachers')
        .subscribe(data => {
            this.list = data;
        });
  }

  ngOnInit() {}

  professorDatail(professor) {
      this.professorService.currentProfessor = professor;
      this.router.navigate(['/datail-professor']);
  }

  redirecionarProfessor() {
    this.router.navigate(['/save-professor']);
  }
}
