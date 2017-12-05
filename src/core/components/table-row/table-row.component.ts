import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-trow',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() theading: any[];
  sortByAlpha = false;

  constructor() { }

  ngOnInit() {
  }

}
