import { Component, Input, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'card-3d',
  templateUrl: './card-3d.component.html',
  styleUrls: ['./card-3d.component.css']
})
export class Card3DComponent implements OnInit{
 @Input() image?: string

 ngOnInit() {
  AOS.init({
    duration: 1000,
    once: false
  });
}

}
