import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit {

public chart?: Chart;

data = {
  labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    { data: [128, 48, 40, 19, 96, 27, 100, 40], backgroundColor: ['rgba(54, 162, 235)'] },
    { data: [65, 59, 80, 81, 56, 55, 40, 20], backgroundColor: ['rgba(255, 205, 86)'] },
    { data: [12, 48, 40, 19, 86, 27, 90, 70], backgroundColor: ['rgba(75, 192, 192)'] },
    { data: [49, 31, 30, 70, 16, 66, 10, 30], backgroundColor: ['rgba(153, 102, 255)'] },
    { data: [10, 20, 30, 40, 50, 60, 70, 80], backgroundColor: ['rgba(255, 159, 64)'] },
    { data: [10, 20, 30, 40, 50, 60, 70, 80], backgroundColor: ['rgba(255, 159, 64)'] }
  ]
};

ngOnInit(): void {
  const chartCanvas = <HTMLCanvasElement>document.getElementById('chartbar');
  const chart = new Chart(chartCanvas, {
    type: 'bar',
    data: this.data,
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  });

}
}
