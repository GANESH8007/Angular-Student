import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegFormComponent } from './Component/reg-form/reg-form.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewStudentComponent } from './Component/view-student/view-student.component';
import { SearchStudentComponent } from './Component/search-student/search-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCircularComponent } from './Component/create-circular/create-circular.component';
import { ViewCircularComponent } from './Component/view-circular/view-circular.component';
import { ApproveApplicationComponent } from './Component/approve-application/approve-application.component';

@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    NavbarComponent,
    ViewStudentComponent,
    SearchStudentComponent,
    CreateCircularComponent,
    ViewCircularComponent,
    ApproveApplicationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
