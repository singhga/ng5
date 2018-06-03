import { Component } from '@angular/core';
import { TransactionService } from './transaction.service';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import {ViewChild} from '@angular/core';

@Component({
  templateUrl: 'transaction.component.html'
})
export class TransactionComponent {

  // lineChart =[];
  @ViewChild("mainChart") mainChart: BaseChartDirective;
 public lineChartData : Array<any>= [];
 public radioModel: string = 'Day';
 public lineChartLabels :Array<any> =[];
 public totalProfit = 0;
 public quantity= 0;
 constructor(private _transactionService : TransactionService){ }

ngOnInit()
{
  this._transactionService.getData(this.radioModel).subscribe(res =>
    {
     this.totalProfit = res.map(function(a) {return a["profit"];}).reduce((acc, cur) => acc + cur, 0);
     this.quantity = res.map(function(a) {return a["quantity"];}).reduce((acc, cur) => acc + cur, 0);
      this.lineChartData  = [{
        "data" : data,
        "label" : "Profits"
      }];
      this.lineChartLabels = res.map(function(a) {return a["transactionDate"];});
    })
}
  public lineChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest'
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  updateChart()
  {
    this._transactionService.getData(this.radioModel).subscribe(res =>
      {
       if (this.mainChart !== undefined) {
       this.mainChart.chart.destroy();
       this.mainChart.chart = 0;
        this.lineChartData  = [{
          "data" : data,
          "label" : "Profits"
        }];
        this.totalProfit = res.map(function(a) {return a["profit"];}).reduce((acc, cur) => acc + cur, 0);
        this.quantity = res.map(function(a) {return a["quantity"];}).reduce((acc, cur) => acc + cur, 0);
        this.lineChartLabels = res.map(function(a) {return a["transactionDate"];});
        this.mainChart.datasets =   this.lineChartData ;
        this.mainChart.labels =   this.lineChartLabels;
        this.mainChart.ngOnInit();
     }
      })
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
ngOn
}
