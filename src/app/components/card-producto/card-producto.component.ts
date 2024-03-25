import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent {
  @Input() image?: string;
  @Input() text?: string;
  @Output() imageClick = new EventEmitter<string>();

  onImageClick() {
    this.imageClick.emit(this.image);
  }

}
