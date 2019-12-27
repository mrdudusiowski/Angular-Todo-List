import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input()
  values = [];

  ngOnInit() {
  }

  DeleteFromList(i){
    this.values.splice(i,1);
    localStorage.setItem("storage", JSON.stringify(this.values));
  }


}
