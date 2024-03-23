import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent {
  @Input() image?: string;
  @Input() text?: string;

  
}
