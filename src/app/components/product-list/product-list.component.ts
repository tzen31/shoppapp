import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  resultData: ResultRequest<Product> | undefined
  @Input() products: Product[] = []

  isDisplayModal: boolean = false;
  @Input() isLoading: boolean = true;
  modalProduct: Product | undefined

  // productsSub: Subscription | undefined

  title: string = "My shop";
  age: number = 96;
  isVerify: boolean = true;
  names: string[] = ["Gildas", "Jules"];
  ages: number[] = [25,85,45,63];
  test: any;
  test2: any[] = ["test", 25, true];
  date: Date = new Date();

  /* product: object = {
    name: "Robe pour femmes",
    sold_price: 1299,
    regular_price: 1899,
    isSolded: false
  }
  */
  /*products: Product[] = [
    {
      name: "Robe pour femmes",
      description: "Super élégante et très confortable.",
      category: [],
      imageUrl: "",
      sold_price: 1299,
      regular_price: 8599,
      created_at: new Date(),
    },
    {
      name: "Robe pour femmes",
      description: "Super élégante et très confortable.",
      category: [],
      imageUrl: "",
      sold_price: 1299,
      regular_price: 8599,
      created_at: new Date(),
    }
  ];
  */

  product2: object[] = [
    {
      name: "Robe pour femmes",
      sold_price: 1299,
      regular_price: 1899,
      isSolded: false
    },
    {
      name: "Robe pour femmes",
      sold_price: 1299,
      regular_price: 1899,
      isSolded: false
    }
  ]

  constructor(private productService: ProductService){
    this.title = "My shop"
  }

  ngOnInit():void {

  }

  ngOnDestroy(){

  }

  hello(): string{
    return "";
  }

  getNumber(): number{
    this.title = ""
    return 3;
  }

  handleDeleteProduct(product: Product){
    console.log("handleDeleteProduct : ", product);
    //Suppression d'un element en js
    this.products = this.products.filter(p => p._id != product._id)

  }

  handleDisplayProductViewModal(product: Product){
    console.log("---handleShowProductViewModal---");
    console.log(product);
    //Affichage d'une modale
    if (product){
      this.isDisplayModal = true;
      this.modalProduct = product
    }
    this.products = this.products.filter(p => p._id = product._id)
  }

  handleCloseModal(){
    this.isDisplayModal = false;
    this.modalProduct = undefined
  }
}
