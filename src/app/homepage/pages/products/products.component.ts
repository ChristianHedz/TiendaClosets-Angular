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
    { image: '../../../assets/img/closet (12).webp', smallImage: '../../../assets/img/closets(9).webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (2).webp', smallImage: '../../../assets/img/closets(6).webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (3).webp', smallImage: '../../../assets/img/closet3.webp', text: 'CLOSET' },
  ],
  [
    { image: '../../../assets/img/armario-brown.webp', smallImage: '../../../assets/img/armario-brown.webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (10).webp', smallImage: '../../../assets/img/closets(11).webp', text: 'CLOSET' },
    { image: '../../../assets/img/closets(10).webp', smallImage: '../../../assets/img/closets(10).webp', text: 'CLOSET' },
  ],
  [
    { image: '../../../assets/img/closets(1).webp', smallImage: '../../../assets/img/closets(1).webp', text: 'CLOSET' },
    { image: '../../../assets/img/ropero-dark.webp', smallImage: '../../../assets/img/ropero-dark.webp', text: 'CLOSET' },
    { image: '../../../assets/img/closet (4).webp', smallImage: '../../../assets/img/closets(5).webp', text: 'CLOSET' },
  ],
];

  currentImage?: string;

  showModal() {
    $('#imageModal').modal('show');
  }
  // ...
}
