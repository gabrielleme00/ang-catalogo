import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PoModule } from '@portinari/portinari-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CreateCompanyComponent } from './pages/companies/create-company/create-company.component';
import { EditCompanyComponent } from './pages/companies/edit-company/edit-company.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';
import { CreateProductComponent } from './pages/products/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreateCompanyComponent,
    EditCompanyComponent,
    ListProductsComponent,
    EditProductComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
