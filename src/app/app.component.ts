import { Component } from '@angular/core';

import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp-assignment';
  number ="9670313931" 


contact():void{
this.number;
console.log(this.number);
  
}



}