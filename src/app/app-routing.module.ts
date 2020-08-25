import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersListComponent } from './members-list/members-list.component';
import { HeaderComponent } from './header/header.component';
import { MemberProfilComponent } from './member-profil/member-profil.component'

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'members-list', component: MembersListComponent},
  {path: 'member/:id', component: MemberProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
