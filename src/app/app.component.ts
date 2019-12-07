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
  count = 0;

  onChange(event: any){
    this.value=event.target.value;
    event.target.value='';
  }

  AddToList(){
    this.count=localStorage.length;
    if(this.value!=''){
      this.values.push(this.value);
      localStorage.setItem(this.count.toString(), this.value);
      console.log("Licznik: "+this.count);
      this.count++;
      this.value='';
    }else{
      console.log("Input can't be empty");
    }
  }

  DeleteFromList(i){
    this.values.splice(i,1);
    localStorage.removeItem(i.toString());

    var tablica = [];
    for(var j=localStorage.length-1 ; j>=0; j--) {
      var key = localStorage.key(j);
      var value = localStorage[key];
      tablica[j]=value;
    }
    tablica.reverse();
    localStorage.clear();
    for(var z=0; z<tablica.length; z++){
      localStorage.setItem(z.toString(), tablica[z]);
    }

  }


  LoadStorage(){
    for(var i=localStorage.length-1, len=localStorage.length; i>=0; i--) {
          var key = localStorage.key(i);
          var value = localStorage[key];
          if(value != ''){
          this.values.push(value);
          }
    }
  }
  
  ClearStorage(){
    localStorage.clear();
    this.count=0;
    console.log("LocalStorge is clear!");
  }
  
  ngOnInit() {
    this.LoadStorage();
  }
}
