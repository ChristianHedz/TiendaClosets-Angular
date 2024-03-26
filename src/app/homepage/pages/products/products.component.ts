import { Component } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
rows = [
  [
    { image: '../../../assets/img/closet (12).webp', smallImage: '../../../assets/img/closets(12).webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (2).webp', smallImage: '../../../assets/img/closets(2).webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (3).webp', smallImage: '../../../assets/img/closets(3).webp', text: 'CLOSET' },
  ],
  [
    { image: '../../../assets/img/armario-brown.webp', smallImage: '../../../assets/img/armario-brown.webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (10).webp', smallImage: '../../../assets/img/closets(10).webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (8).webp', smallImage: '../../../assets/img/closets(8).webp', text: 'CLOSET' },
  ],
  [
    { image: '../../../assets/img/closet (11).webp', smallImage: '../../../assets/img/closets(11).webp', text: 'CLOSET' },
    { image: '../../../assets/img/ropero-dark.webp', smallImage: '../../../assets/img/ropero-dark.webp', text: 'CLOSET' },
    { image: '../../../assets/img/armario.webp', smallImage: '../../../assets/img/armario.webp', text: 'CLOSET' },
  ],
];

  currentImage?: string;

  showModal() {
    $('#imageModal').modal('show');
  }
  // ...
}
