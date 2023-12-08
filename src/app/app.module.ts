import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AddteacherComponent } from './pages/addteacher/addteacher.component';
import { authInterceptorProviders } from './service/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    AddstudentComponent,
    AddteacherComponent,
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
