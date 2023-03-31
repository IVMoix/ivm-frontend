import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/education/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/education/neweducacion/neweducacion.component';
import { EditSkillComponent } from './components/hard-n-soft-skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/hard-n-soft-skills/new-skill/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/work-experience/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/work-experience/new-experiencia/new-experiencia.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login",component: LoginComponent},
  {path:"nuevaexp", component: NewExperienciaComponent},
  {path:"editexp/:id", component: EditExperienciaComponent},
  {path:"nuevaedu", component: NeweducacionComponent},
  {path:"editedu/:id",component: EditeducacionComponent},
  {path:"newskill",component: NewSkillComponent},
  {path:"editskill/:id",component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
