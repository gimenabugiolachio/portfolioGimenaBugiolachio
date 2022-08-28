import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAcercaDeComponent } from './components/acerca/editar-acerca-de.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditarProyectosComponent } from './components/proyectos/editar-proyectos.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditarSkillComponent } from './components/skills/editar-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path:'', component: PortfolioComponent},
  {path: 'login', component: IniciarSesionComponent } ,
  {path: 'agregarExperiencia', component: NewExperienciaComponent},
  {path: 'editarExperiencia/:id', component: EditarExperienciaComponent},
  {path: 'agregarEducacion', component: NewEducacionComponent},
  {path: 'editarEducacion/:id', component: EditarEducacionComponent},
  {path: 'editarAcercaDe/:id', component: EditarAcercaDeComponent},
  {path: 'agregarProyecto', component: NewProyectoComponent},
  {path: 'editarProyecto/:id', component: EditarProyectosComponent},
  {path: 'editarSkill/:id', component: EditarSkillComponent},
  {path: 'agregarSkill', component: NewSkillComponent}

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
