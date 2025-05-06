import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-product-view',
  standalone: false,
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent {
@Input() product: Product | undefined

@Output() close: EventEmitter<string> = new EventEmitter<string>()


closeModal(){
    this.close.emit()
  }


}


