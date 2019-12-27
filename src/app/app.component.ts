import { Component } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import {LocalstorageService} from './localstorage.service';

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
      localStorage.setItem("storage", JSON.stringify(this.values));
    }else{
      console.log("Input can't be empty");
    }
    this.value='';
  }

 
  constructor(private LocalstorageService: LocalstorageService){}
  ngOnInit() {
     this.values= this.LocalstorageService.LoadStorage();
  }
}
