import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MembersListComponent } from './members-list/members-list.component';
import { HeaderComponent } from './header/header.component';
import { MembersComponent } from './service/members.component'
const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'members-list', component: MembersListComponent},
  {path: 'members', component: MembersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
