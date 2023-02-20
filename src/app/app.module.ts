import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClient, HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    LoginComponent,
    AcercaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 60,
      "space": -10,
      "maxPercent": 100,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#00358e",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showSubtitle":false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": true
    })
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
