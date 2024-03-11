import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'chrisproyect';
  public counter: number = 10;

  public increment(value: number ) {
    this.counter += value;
  }

  public reset(){
    this.counter = 10;
  }
}
