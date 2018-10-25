import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';


import { JwtModule } from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './auth/auth.guard';
import { Camera } from '@ionic-native/camera/ngx';
import {SendButtonComponent} from './components/send-button/send-button.component';

export function tokenGetter() {
    return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent, SendButtonComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      IonicStorageModule.forRoot(),
      HttpClientModule,
      JwtModule.forRoot({
          config: {
              tokenGetter: tokenGetter
          }
      })],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AuthenticationService,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
