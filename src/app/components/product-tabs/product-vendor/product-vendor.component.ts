import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-vendor',
  standalone: false,
  templateUrl: './product-vendor.component.html',
  styleUrl: './product-vendor.component.css'
})
export class ProductVendorComponent {
  product: Product | undefined

  ngOnInit(){
    console.log("ProductVendorComponent");

    console.log(this.product);

  }
}
