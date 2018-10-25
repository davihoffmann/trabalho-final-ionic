import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
      {
          title: 'Início',
          url: '/home',
          icon: 'home'
      },
      {
        title: 'Lista Professores',
        url: '/list-professor',
        icon: 'list'
      },
      {
        title: 'Cadastro Professor',
        url: '/save-professor',
        icon: 'ios-add'
      },
      {
          title: 'Configuração',
          url: '/save-professor',
          icon: 'ios-cog'
      }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router,
    private menuController: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
    this.menuController.close();
  }
}
