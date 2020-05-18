import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceModule } from "./services/service.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ServiceModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
