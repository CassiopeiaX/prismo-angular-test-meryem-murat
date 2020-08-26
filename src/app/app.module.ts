import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { MembersService } from "./service/members-list.service";
import { MembersComponent } from "./service/members.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemberProfilComponent } from './member-profil/member-profil.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    MembersListComponent,
    MemberCardComponent,
    MembersComponent,
    MemberProfilComponent,
    FormComponent,

    ],
  imports: [
    HttpClientModule,
    HttpModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [MembersService,FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
