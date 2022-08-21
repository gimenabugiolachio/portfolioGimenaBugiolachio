import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from "swiper/angular";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PrevDirective } from './components/proyectos/prev.directive';
import { NextDirective } from './components/proyectos/next.directive';
import { HeaderComponent } from './components/header/header.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { EditarAcercaDeComponent } from './components/acerca/editar-acerca-de.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    PortfolioComponent,
    IniciarSesionComponent,
    SkillsComponent,
    ContactoComponent,
    PrevDirective,
    NextDirective,
    HeaderComponent,
    NewExperienciaComponent,
    EditarExperienciaComponent,
    NewEducacionComponent,
    EditarEducacionComponent,
    EditarAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
