import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent  {

  rows = [
    [
      { image: '../../../assets/img/armario-brown.webp', smallImage: '../../../assets/img/armario-brown.webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (10).webp', smallImage: '../../../assets/img/closets(10).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (3).webp', smallImage: '../../../assets/img/closets(3).webp', text: 'CLOSET' },
    ],
    [
      { image: '../../../assets/img/closet (12).webp', smallImage: '../../../assets/img/closets(12).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (2).webp', smallImage: '../../../assets/img/closets(2).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (11).webp', smallImage: '../../../assets/img/closets(4).webp', text: 'CLOSET' },
    ],
  ];

  currentImage?: string;

  showModal(){
    $('#imageModal').modal('show');
  }
}