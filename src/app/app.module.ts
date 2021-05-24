import { RequestComponent } from './components/request/request.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { PersonComponent } from './components/person/person.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestlistComponent } from './components/requestlist/requestlist.component';


const rutas: Routes = [
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: 'request',
        component: RequestComponent
      }
    ]
  },
  {
    path: 'requestlist',
    component: RequestlistComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    PersonComponent,
    TeacherComponent,
    RequestComponent,
    RequestlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
