import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICostumer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICostumer;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getCustomer(id).subscribe((customer: ICostumer) => {
      this.customer = customer;
    });
  }

}