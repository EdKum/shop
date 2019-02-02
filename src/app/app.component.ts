import { Component, OnInit } from '@angular/core';
//@Component is a decorator
@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  constructor(){

  }
  
  ngOnInit(){
   
  }
}
