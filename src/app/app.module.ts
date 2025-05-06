import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductComponent } from './components/product/product.component';
import { ModalProductViewComponent } from './components/modal-product-view/modal-product-view.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './components/auth/connexion/connexion.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { LoadingComponent } from './components/loading/loading.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductVendorComponent } from './components/product-tabs/product-vendor/product-vendor.component';
import { ProductReviewComponent } from './components/product-tabs/product-review/product-review.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductComponent,
    ModalProductViewComponent,
    SigninComponent,
    SignupComponent,
    ConnexionComponent,
    LoadingComponent,
    PaymentCardComponent,
    ProductDetailsComponent,
    
    ProductDescriptionComponent,
    ProductVendorComponent,
    ProductReviewComponent,
    ProductAdditionalInfoComponent,
    AsideNavComponent,
    HomeSliderComponent,
    ProductsContainerComponent,
    PageTitleComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
