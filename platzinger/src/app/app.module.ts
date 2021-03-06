import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { ConversationComponent } from "./conversation/conversation.component";
import { ProfileComponent } from "./profile/profile.component";
import { MenuComponent } from './menu/menu.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from './pipes/searcg';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'home', component: HomeComponent},
 {path: 'login', component: LoginComponent},
 {path: 'conversation/:uid', component: ConversationComponent},
 {path: 'profile', component: ProfileComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
