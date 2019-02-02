import { Component, OnInit } from '@angular/core';
import { ICostumer } from '../shared/interfaces';
import { DataService } from "../core/data.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICostumer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Customers';
    //get Costumers from Service as Observable
    this.dataService.getCustomers()
      .subscribe((customers: ICostumer[]) => this.people = customers);

  }

}
