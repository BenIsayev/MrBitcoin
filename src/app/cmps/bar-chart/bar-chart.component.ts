import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        ticks: {
          color: '#fff'
        }
      },
      y: {
        min: 0,
        ticks: {
          color: '#fff'
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];
  public barChartData: ChartData<'bar'>
  @Input() chartLabels: []
  @Input() chartDatasets: []

  ngOnInit() {

    console.log('this.chartLabels', this.chartLabels)
    console.log('this.chartDatasets', this.chartDatasets)
    this.barChartData = {
      labels: this.chartLabels,
      datasets: this.chartDatasets
    };
  }



  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }
}