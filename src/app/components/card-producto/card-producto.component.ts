import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent implements OnInit{
  srcset?: string;
  @Input() text?: string;
  @Input() image?: string;
  @Input() smallImage?: string;
  @Output() imageClick = new EventEmitter<string>();

  onImageClick() {
    this.imageClick.emit(this.image);
  }

  ngOnInit() {
    this.srcset = this.smallImage + ' 768w';
    AOS.init({
      duration: 1000, 
      once: false
    });
  }

}
