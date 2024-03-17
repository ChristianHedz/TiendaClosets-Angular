import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit{
  chartData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8', 'Semana 9', 'Semana 10'],
    datasets: [
      {
        label: 'Nuevos Leads Generados',
        data: [650, 590, 800, 250, 720, 385, 650, 280, 740, 350, 690, 620],
        backgroundColor: 'rgba(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235)',
        borderWidth: 1
      },
      {
        label: 'Nuevos Leads Generados',
        data: [450, 590, 600, 250, 420, 385, 450, 480, 440, 350, 390, 220],
        backgroundColor: 'rgba(54, 162, 15)',
        borderColor: 'rgba(54, 162, 15)',
        borderWidth: 1
      }
    ]
  };

  ngOnInit() {
    const chartCanvas = <HTMLCanvasElement>document.getElementById('chartline');
    const chart = new Chart(chartCanvas, {
      type: 'line',
      data: this.chartData,
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Semanas'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Nuevos Leads Generados'
            },
            beginAtZero: true
          }
        }
      }
    });
  }
}
