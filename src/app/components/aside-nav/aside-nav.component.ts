import { Component, EventEmitter, Output } from '@angular/core';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/items';

@Component({
  selector: 'app-aside-nav',
  standalone: false,
  templateUrl: './aside-nav.component.html',
  styleUrl: './aside-nav.component.css'
})
export class AsideNavComponent {
  navs_data: Item[] = nav_items
  auths_data: Item[] = auth_items

  @Output() close: EventEmitter<string> = new EventEmitter<string>();

  handleClose(): void {
    this.close.emit()
  }
}
