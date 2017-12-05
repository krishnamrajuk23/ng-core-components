import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {
  theading = [
    {
      id:1,
      title:"Name",
      filter: true,
      sort: true
    },
    {
      id:2,
      title:"Gender"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
