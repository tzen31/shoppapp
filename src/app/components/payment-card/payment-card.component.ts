import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  standalone: false,
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css'
})
export class PaymentCardComponent{
@Input() fullWidth: boolean = false;

ngOnInit(): void {
}

}
