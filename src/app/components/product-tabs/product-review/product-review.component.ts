import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-review',
  standalone: false,
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.css'
})
export class ProductReviewComponent {
  product: Product | undefined

  ngOnInit(){
    console.log("ProductReviewComponent");

    console.log(this.product);

  }
}
