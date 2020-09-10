import { Component, OnInit } from '@angular/core';
import { AtmHistoryService } from '../../services/atm-history/atm-history.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor( public atmHistoryService: AtmHistoryService) { }

  ngOnInit(): void {
  }

}
