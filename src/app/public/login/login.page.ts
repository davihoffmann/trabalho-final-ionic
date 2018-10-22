import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {first} from 'rxjs/operators';
import {EsqueceuSenhaPage} from '../esqueceu-senha/esqueceu-senha.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public email: string;
    public senha: string;
    public mensagem: string;

    constructor(private http: HttpClient, private router: Router, private authService: AuthenticationService,
                public modalController: ModalController) { }

    ngOnInit() {
    }

    public submit() {
        this.authService.login(this.email, this.senha)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/home']),
                err => this.mensagem = 'Não foi possível se conectar'
            );
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: EsqueceuSenhaPage
        });
        await modal.present();
    }

}
