import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProfessorService} from '../../services/professor.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-datail-professor',
  templateUrl: './datail-professor.page.html',
  styleUrls: ['./datail-professor.page.scss'],
})
export class DatailProfessorPage implements OnInit {

  professor: any;
  mensagem: any;

  constructor(private professorService: ProfessorService, private router: Router) {
  }

  ngOnInit() {
    this.professor = this.professorService.currentProfessor;
  }

  deleteProfessor(professor) {
    this.professorService.deleteProfessor('teachers/', this.professor._id)
      .pipe(first())
          .subscribe(
              result => this.router.navigate(['/list-professor']),
              err => this.mensagem = 'Erro ao excluir o professor.'
          );
  }

  alterarProfessor(professor) {
    this.professorService.currentProfessor = professor;
    this.router.navigate(['/save-professor']);
  }

}
