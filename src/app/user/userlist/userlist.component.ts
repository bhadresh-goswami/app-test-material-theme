import { NgModule, Component, enableProdMode } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';

import DataSource from 'devextreme/data/data_source';

import { UserServiceService } from '../services/user-service.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

const getOrderDay = function (rowData: any): number {
  return new Date(rowData.OrderDate).getDay();
};
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserServiceService],
})
export class UserlistComponent {
  // dataSource: Employee[];

  // readonly allowedPageSizes = [5, 10, 'all'];

  // readonly displayModes = [
  //   { text: "Display Mode 'full'", value: 'full' },
  //   { text: "Display Mode 'compact'", value: 'compact' },
  // ];

  // displayMode = 'full';

  // showPageSizeSelector: boolean = true;

  // showInfo = true;

  // showNavButtons = true;

  // customizeColumns(columns: any) {
  //   columns[0].width = 70;
  // }

  // get isCompactMode() {
  //   return this.displayMode === 'compact';
  // }

  //for filter
  dataSource: any;
  filterValue!: Array<any>;

  customOperations!: Array<any>;

  popupPosition: any;

  saleAmountHeaderFilter: any;
  columns = ['Id', 'OrderNumber', 'OrderDate', 'SaleAmount', 'Terms'];
  constructor(service: UserServiceService) {
    //this.dataSource = service.generateData(100000);
    this.dataSource = new DataSource({
      store: service.getOrders(),
    });
    this.popupPosition = {
      of: window,
      at: 'top',
      my: 'top',
      offset: { y: 10 },
    };
    this.filterValue = [
      ['Employee', '=', 'Clark Morgan'],
      'and',
      ['OrderDate', 'weekends'],
    ];
    this.customOperations = [
      {
        name: 'weekends',
        caption: 'Weekends',
        dataTypes: ['date'],
        icon: 'check',
        hasValue: false,
        calculateFilterExpression() {
          return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
        },
      },
    ];

    this.saleAmountHeaderFilter = [
      {
        text: 'Less than $3000',
        value: ['SaleAmount', '<', 3000],
      },
      {
        text: '$3000 - $5000',
        value: [
          ['SaleAmount', '>=', 3000],
          ['SaleAmount', '<', 5000],
        ],
      },
      {
        text: '$5000 - $10000',
        value: [
          ['SaleAmount', '>=', 5000],
          ['SaleAmount', '<', 10000],
        ],
      },
      {
        text: '$10000 - $20000',
        value: [
          ['SaleAmount', '>=', 10000],
          ['SaleAmount', '<', 20000],
        ],
      },
      {
        text: 'Greater than $20000',
        value: ['SaleAmount', '>=', 20000],
      },
    ];
  }

  onInitialized(e: any) {
    e.component.columnOption('SaleAmount', {
      editorOptions: {
        format: 'currency',
        showClearButton: true,
      },
    });
  }
}
