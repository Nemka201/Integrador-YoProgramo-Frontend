import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';

const routes: Routes = [
  // Routes
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  // Experiencia routes
  {path:'nuevaexperiencia', component: NewExperienciaComponent},
  {path:'editexperiencia/:id', component: EditExperienciaComponent},
  // Educacion routes
  {path:'nuevaeducacion', component: NewEducacionComponent},
  {path:'editeducacion/:id', component: EditEducacionComponent},
  // Habilidaes routes
  {path:'newskill', component: NewHabilidadesComponent},
  {path:'editskill/:id', component: EditHabilidadesComponent},
  // Perfil routes
  //{path:'editacerca/:id',component: EditEducacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
