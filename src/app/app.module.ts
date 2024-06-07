import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpDemoComponent } from './http-demo/http-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingDemoComponent,
    DirectivesDemoComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    UserFormComponent,
    HttpDemoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  exports:[
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
