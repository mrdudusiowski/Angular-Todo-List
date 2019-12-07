import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inteligentna lista';
  value = '';
  values = [];

  onChange(event: any){
    this.value=event.target.value;
    event.target.value='';
  }

  AddToList(){
    this.values.push(this.value);
    this.value='';
  }

  DeleteFromList(i){
    this.values.splice(i,1);
  }





}
