import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ProfessorService} from '../../services/professor.service';
import {first} from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-save-professor',
  templateUrl: './save-professor.page.html',
  styleUrls: ['./save-professor.page.scss'],
})
export class SaveProfessorPage implements OnInit {

  public foto: any;
  public id: string;
  public name: string;
  public dataNascimento: string;
  public curriculum: string;
  public status: boolean;
  public mensagem: string;
  navigationSubscription;

  constructor(private router: Router, private professorService: ProfessorService, private camera: Camera) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.init();
          }
      });
  }

  init() {
      if (this.professorService.currentProfessor) {
          this.foto = this.professorService.currentProfessor.imagem;
          this.id = this.professorService.currentProfessor._id;
          this.name = this.professorService.currentProfessor.name;
          this.dataNascimento = this.professorService.currentProfessor.birthDate;
          this.curriculum = this.professorService.currentProfessor.curriculum;
          this.status = this.professorService.currentProfessor.status;
      }
  }

  ngOnInit() {
  }

  public submit() {
      if (this.id !== undefined) {
          this.professorService.updateProfessor('http://173.82.104.22:5000/teachers/', this.id, this.name,
              this.dataNascimento = new Date().toISOString(), this.curriculum, this.status, this.foto)
              .pipe(first())
              .subscribe(
                  result => this.router.navigate(['/list-professor']),
                  err => this.mensagem = 'Erro ao alterar o professor.'
              );
      } else {
          this.professorService.saveProfessor('http://173.82.104.22:5000/teachers', this.name,
              this.dataNascimento = new Date().toISOString(), this.curriculum, this.status, this.foto)
              .pipe(first())
              .subscribe(
                  result => this.router.navigate(['/list-professor']),
                  err => this.mensagem = 'Erro ao salvar o professor.'
              );
      }
  }

  statusOnChange(statusSelected) {
    this.status = statusSelected;
  }

  tirarFoto() {
    const options: CameraOptions = {
        quality: 40,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
            this.foto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            this.mensagem = 'Erro ao tirar a foto do professor.';
        });
  }

}
