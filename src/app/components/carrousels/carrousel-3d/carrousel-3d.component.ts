import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'carrousel-3d',
  templateUrl: './carrousel-3d.component.html',
  styleUrl: './carrousel-3d.component.css'
})
export class Carrousel3DComponent implements OnInit{
  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false
    });
  }
}
