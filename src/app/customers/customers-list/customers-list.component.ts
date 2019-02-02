import { Component, OnInit, Input } from '@angular/core';

import { ICostumer } from 'src/app/shared/interfaces';
import { SorterService } from 'src/app/core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    // _customers ist ein property für das DOM Element 
    //und über get und set Methoden kann auf den Inhalt zugegrifen werden
    // diese Eigenschaft kommt in customers.component.html rein
    private _customers: ICostumer[] = [];
    @Input() get customers(): ICostumer[]{
      return this._customers;
    }

    set customers(value: ICostumer[]){
      if(value){
        this.filteredCustomers = this._customers = value;
        this.calcucateOrders();
      }
    }

    filteredCustomers: ICostumer[] = [];
    customersOrderTotal: number;
    currencyCode: string = '€';

  constructor(private sorterService: SorterService) { }

  ngOnInit() {

  }


  calcucateOrders(){
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust:ICostumer)=>{
      this.customersOrderTotal += cust.orderTotal;
    })
  }

  filter(data:string){
    if(data){
      this.filteredCustomers=this.customers.filter((cust:ICostumer)=>{
        return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               cust.orderTotal.toString().indexOf(data) > -1;
      });
     
    }else{
      this.filteredCustomers = this.customers;
    }
    this.calcucateOrders();
  }

  sort(prop: string){
    //A sorter service will handle the sorting
    this.sorterService.sort(this.filteredCustomers, prop);
  }

}
