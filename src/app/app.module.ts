import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';

import {
  AppComponent
} from './app.component';
import {
  HeroesComponent
} from './heroes/heroes.component';
import {
  FormsModule
} from '@angular/forms';
import {
  TasksComponent
} from './tasks/tasks.component';
import {
  DepartmentsComponent
} from './departments/departments.component';
import {
  EmployeesComponent
} from './employees/employees.component'; //"this is where ng model comes from"
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  AppRoutingModule
} from './app-routing.module';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  HttpClientModule
} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    DashboardComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
