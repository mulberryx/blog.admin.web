import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthorityComponent } from './routes/authority/authority.component';
import { ContentsComponent } from './routes/contents/contents.component';
import { HomeComponent } from './routes/home/home.component';
import { InterfacesComponent } from './routes/interfaces/interfaces.component';
import { JournalsComponent } from './routes/journals/journals.component';
import { ServicesComponent } from './routes/services/services.component';
import { LoginComponent } from './routes/login/login.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'interfaces', component: InterfacesComponent, canActivate: [AuthGuard] },
  { path: 'journal', component: JournalsComponent, canActivate: [AuthGuard] },
  { path: 'content', component: ContentsComponent, canActivate: [AuthGuard] },
  { path: 'authority', component: AuthorityComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
})
export class AppRoutingModule { }
