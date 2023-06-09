import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardNSoftSkillsComponent } from './components/hard-n-soft-skills/hard-n-soft-skills.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { FooterComponent } from './components/footer/footer.component';
import { APLogoComponent } from './components/header/ap-logo/ap-logo.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/work-experience/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/work-experience/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/education/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/education/editeducacion/editeducacion.component';
import { EditSkillComponent } from './components/hard-n-soft-skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/hard-n-soft-skills/new-skill/new-skill.component'
import { FormsModule } from '@angular/forms';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    HardNSoftSkillsComponent,
    AboutComponent,
    ProyectComponent,
    FooterComponent,
    APLogoComponent,
    BannerComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
