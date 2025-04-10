import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { BarnComponent } from './barn/barn.component';
 //import { AttractionsComponent } from './attractions/attractions.component';
 import { PoliciesComponent } from './policies/policies.component';
import { ContactComponent } from './contact/contact.component';
import { AttractionComponent } from './attraction/attraction.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { BooknowComponent } from './booknow/booknow.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '', redirectTo: '/register', pathMatch: 'full' },
  // { path: '**', redirectTo: '/register' }, // wildcard route for 404s
   { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
 // { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  // { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
 { path: 'accomodations', component: AccommodationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'barn', component: BarnComponent },
  { path: 'attractions', component: AttractionComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booknow', component: BooknowComponent },
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

 // { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];
