import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/items';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  data: Number | undefined
  second: Number | undefined
  secondSub: Subscription | undefined
  siteName: string = environment.siteName
  navs_data: Item[] = nav_items
  auths_data: Item[] = auth_items
  isDisplayMobileNav: boolean = false

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    console.log(this.navs_data);

    /*
    this.productService.getNumber()
    .subscribe(
       (value)=>{
         this.data = value
      })
    */
    this.secondSub = this.productService.getSecond()
    .subscribe(
      // (value)=>{
      //   this.second = value
      {
        next: (value: Number)=>{
          this.second = value
        },
        error: (error: any)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log("Complete");
        }
      })
  }

  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }

  handleDisplayMobileNav(): void {
    this.isDisplayMobileNav = !this.isDisplayMobileNav
  }

  handleCloseMobileNav(): void {
    this.isDisplayMobileNav = false
  }
}

