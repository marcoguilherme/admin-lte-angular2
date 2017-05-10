import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { LayoutsAuthComponent } from './pages/layouts/auth/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { LotesComponent } from './pages/lotes/lotes.component';

const routes: Routes = [
  // logged routes
  {
    children: [
      { component: HomeComponent, path: 'home' },
      { component: LotesComponent, path: 'lotes' },
    ],
    
    component: LayoutsAuthComponent, path: '',
  },
  // not logged routes
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
