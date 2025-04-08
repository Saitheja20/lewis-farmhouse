import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { BarnComponent } from './barn/barn.component';
 //import { AttractionsComponent } from './attractions/attractions.component';
 import { PoliciesComponent } from './policies/policies.component';
export const routes: Routes = [
  { path: '', component: IndexComponent },
 // { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
 // { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
  { path: 'header', component: HeaderComponent },
  { path: 'barn', component: BarnComponent },
 // { path: 'attractions', component: AttractionsComponent },
  {path: 'policies', component: PoliciesComponent},
 // { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];
