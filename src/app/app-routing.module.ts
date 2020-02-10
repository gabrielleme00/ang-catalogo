import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { CreateCompanyComponent } from './pages/companies/create-company/create-company.component';
import { EditCompanyComponent } from './pages/companies/edit-company/edit-company.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/create', component: CreateCompanyComponent },
  { path: 'companies/edit/:id', component: EditCompanyComponent },
  { path: 'companies/edit', redirectTo: 'companies' },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
