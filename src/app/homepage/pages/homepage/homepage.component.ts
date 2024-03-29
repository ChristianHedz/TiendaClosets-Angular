import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  rows = [
    [
      { image: '../../../assets/img/armario-brown.webp', smallImage: '../../../assets/img/armario-brown.webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (10).webp', smallImage: '../../../assets/img/closets(10).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (11).webp', smallImage: '../../../assets/img/closets(11).webp', text: 'CLOSET' },
    ],
    [
      { image: '../../../assets/img/closet (12).webp', smallImage: '../../../assets/img/closets(9).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (2).webp', smallImage: '../../../assets/img/closets(6).webp', text: 'CLOSET' },
      { image: '../../../assets/img/closet (3).webp', smallImage: '../../../assets/img/closet3.webp', text: 'CLOSET' },
    ],
  ];

  currentImage?: string;

  showModal(){
    $('#imageModal').modal('show');
  }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
