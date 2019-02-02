import { Component, OnInit } from '@angular/core';
//@Component is a decorator
@Component({
  selector: 'app-root',
  template: `
  <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit{

  constructor(){

  }
  
  ngOnInit(){
   
  }
}
