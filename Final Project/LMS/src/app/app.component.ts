import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul class="nav justify-content-end">
  <li class="nav-item m-3">
    <a class="btn btn-dark" [routerLink]="['']">Home</a>
  </li>
  <li class="nav-item m-3">
    <button class="btn btn-dark" [routerLink]="['service']">Service</button>
  </li>
  
  <li class="nav-item m-3">
    <a class="btn btn-dark" [routerLink]="['track']">Track</a>
  </li>
  <li class="nav-item m-3">
    <a class="btn btn-dark"  [routerLink]="['admin']">Admin</a>
  </li>
</ul>
  <div class="container">
   <h1>We Make Laundary Easy !</h1>
   <br>
   <h3>Your Clothes Wants Only Nobel Laundry Pvt.Ltd</h3> 
  </div>
  <router-outlet><router-outlet>
  `
})
export class AppComponent {
  title = 'LMS';
}
