import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { ConnexionComponent } from './components/auth/connexion/connexion.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductReviewComponent } from './components/product-tabs/product-review/product-review.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


export const ROUTES: Routes = [
  {
    path: '',
    component: ContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
    //pathMatch: 'full',
    children: [
      {
        path: "",
        redirectTo: "description",
        pathMatch: "prefix"
      },
      {
        path: "description",
        component: ProductDescriptionComponent
      },
      {
        path: "additional-info",
        component: ProductAdditionalInfoComponent
      },
      {
        path: "vendor-info",
        component: ProductVendorComponent
      },
      {
        path: "reviews",
        component: ProductReviewComponent
      },
    ]
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: "products",
    component: ProductsContainerComponent,
    pathMatch: 'full'
  },
  {
    path: "contact",
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    pathMatch: 'full'
  },
];

export class AppRoutingModule { }
