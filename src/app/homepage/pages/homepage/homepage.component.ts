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
      { image: '../../../assets/img/armario-brown.webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (10).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (3).webp', text: 'CLOSET' },
    ],
    [
      { image: '../../../assets/img/closet (11).webp', text: 'CLOSET' },
      { image: '../../../assets/img/armario-dark.webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (12).webp', text: 'CLOSET' },
    ],
  ];

  currentImage?: string;

  showModal(){
    $('#imageModal').modal('show');
  }
}
