import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inteligent list';
  value = '';
  values = [];

  onChange(event: any){
    this.value=event.target.value;
    event.target.value='';
  }

  AddToList(){
    if(this.value!=''){
    this.values.push(this.value);
    this.value='';
    }else{
      console.log("Input can't be empty");
    }
  }

  DeleteFromList(i){
    this.values.splice(i,1);
  }





}
