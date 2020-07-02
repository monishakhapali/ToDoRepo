import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'monisha';
  constructor(){
    console.log(123);
    this.changeName('toddy');
  }
  changeName(name:string):void{
    this.name =name;
  }
}
