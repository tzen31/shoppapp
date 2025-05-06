import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() product: Product | undefined

handleChangeDetails(component: any){
  component.product = this.product
  // console.log({component: component, product: this.product});
  // console.log({params: component});

}

}
