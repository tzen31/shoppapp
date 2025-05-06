import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent {
  @Input() product: Product | undefined

  @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>
  @Output() displayProductViewModal: EventEmitter<Product> = new EventEmitter<Product>
  productItem: TemplateRef<any> | null | undefined;

  products: Product[] = []
  isDisplayModal: boolean = false;
  modalProduct: Product | undefined

  handleClickProduct(product: Product | undefined){
    //console.log(product);
    this.displayProductViewModal.emit(product)
  }

  deleteProduct(product: Product | undefined){
    console.log(product);
    //this.deleteProductItem.emit(product)
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
