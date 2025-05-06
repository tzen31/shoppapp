import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-description',
  standalone: false,
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css'
})
export class ProductDescriptionComponent {
  product: Product | undefined

  ngOnInit(){
    console.log("ProductDescriptionComponent");

    console.log(this.product);

  }
}
