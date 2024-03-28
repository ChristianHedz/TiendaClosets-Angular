import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-3d',
  templateUrl: './card-3d.Component.html',
  styleUrls: ['./card-3d.component.css']
})
export class Card3DComponent {
 @Input() image?: string

}
