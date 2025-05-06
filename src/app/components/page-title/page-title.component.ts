import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: false,
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent {
  @Input() title: string | undefined;
}
