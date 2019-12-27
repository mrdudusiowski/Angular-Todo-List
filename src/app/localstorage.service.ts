import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  values = [];
  constructor() { }
  
  LoadStorage(){
    this.values = JSON.parse(localStorage.getItem('storage'))
    return this.values;
  }
  
  ClearStorage(){
    localStorage.clear();
    console.log("LocalStorge is clear!");
  }
}
