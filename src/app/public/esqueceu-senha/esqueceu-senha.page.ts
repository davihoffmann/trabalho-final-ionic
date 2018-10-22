import { Component, OnInit } from '@angular/core';
import {ModalController, AlertController} from '@ionic/angular';
import {EsqueceuSenhaService} from '../../services/esqueceu-senha.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

  public email: string;

  constructor(public modalController: ModalController, private esqueceuSenhaService: EsqueceuSenhaService,
              public alertController: AlertController) { }

  async presentAlertSucess() {
      const alert = await this.alertController.create({
          header: 'Nova senha',
          message: 'Sua nova senha foi enviada para seu email.',
          buttons: ['OK']
      });
      await alert.present();
  }

  async presentAlertFalse() {
      const alert = await this.alertController.create({
          header: 'E-mail não encontrado',
          message: 'Este e-mail não foi encontrado.',
          buttons: ['OK']
      });
      await alert.present();
  }

  public submit() {
      this.esqueceuSenhaService.esqueceuSenha(this.email)
          .pipe(first())
          .subscribe(
              result => this.presentAlertSucess(),
              err => this.presentAlertFalse()
          );
  }

    ngOnInit() {
    }

    public dismiss() {
      this.modalController.dismiss();
  }

}
