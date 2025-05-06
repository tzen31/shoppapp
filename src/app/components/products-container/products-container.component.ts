import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-container',
  standalone: false,
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent {
  categories: ResultRequest<Category> | undefined
  currentCategory: Category | undefined
  categoriesSub: Subscription | undefined
  productSub: Subscription | undefined
  products: Product[] = []
  isLoading: boolean = true;

  constructor(private categoriesService: CategoriesService,
              private productService: ProductService
  ) { }

  ngOnInit() {
    this.categoriesSub = this.categoriesService.getCategories()
    .subscribe({
      next: (value: ResultRequest<Category>)=> {
        //console.log(value);
        if(value.isSuccess){
          this.categories = value
          this.handleClick(null, this.categories.results[2])
        }
      }
    })
  }

  ngOnDestroy() {
    if (this.categoriesSub) {
      this.categoriesSub?.unsubscribe()
      this.productSub?.unsubscribe()
    }
  }

  handleClick(event: any, category: Category) {
    this.currentCategory = category
    window.scrollTo(0, 0);
    if(event){
      event.preventDefault()
    }
    //this.isLoading = true;
    this.productSub = this.productService.getProducts()
    .subscribe({
      next: (resultData: ResultRequest<Product>) => {
        if(resultData.isSuccess) {
          let products = resultData.results
          this.products = products.filter((product: Product)=> {
            for(let index = 0; index < product.categories.length; index++){
              if(product.categories[index].slug === category.slug){
                return true;
              }
            }
            return false;
          })
          this.isLoading = false;
        }
      }
    })
    //console.log(category);
  }
}
