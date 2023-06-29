import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { ReadOnlyTaskComponent } from './components/read-only-task/read-only-task.component';
import { LoginComponent } from './components/login/login.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    ReadOnlyTaskComponent,
    LoginComponent,
    AddTaskComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
