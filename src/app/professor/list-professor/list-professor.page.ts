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
  navigationSubscription;
  public filtro: string;
  page = 1;

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
    this.professorService.getProfessores(`teachers?_page=${this.page}`)
        .subscribe(data => {
            this.list = data;
        });
  }

  loadMore(event) {
    this.page++;
    this.professorService.getProfessores(`teachers?_page=${this.page}`)
        .subscribe(data => {
          for (const professor of Object.values(data)[1]) {
            this.list.items.push(professor);
          }
        });
    event.target.complete();
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
