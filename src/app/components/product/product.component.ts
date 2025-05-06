import { Component, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  slug: string | undefined
  currentImage: string | undefined
  product: Product | undefined
  resultData: ResultRequest<Product> | undefined
  productSub: Subscription | undefined
  isLoading: boolean = true;
  percent: number = 0.0;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit():void {
    window.scrollTo(0, 0);
    this.slug = this.route.snapshot.params['slug'];
    this.productSub = this.productService.getProducts()
    .subscribe({
      next: (resultData: ResultRequest<Product>) => {
        if(resultData.isSuccess){
          this.product = resultData.results.filter(p => p.slug === this.slug)[0]
          this.currentImage = this.product?.imageUrl[0]

        }
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log("Error : ", error);
        this.isLoading =  true;
      }
    })
    if (this.product?.sold_price && this.product?.regular_price) {
      this.percent = Math.floor((this.product.sold_price / this.product.regular_price) * 100) + 1;
    } else {
      this.percent = 0;
    }
  }

  ngOnDestroy(): void {
    if (this.productSub){
      this.productSub.unsubscribe()
    }
  }

  handleChangeCurrentImage(image: string): void {
    this.currentImage = image
  }
}
