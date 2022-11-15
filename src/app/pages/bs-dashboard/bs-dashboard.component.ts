import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-bs-dashboard',
  templateUrl: './bs-dashboard.component.html',
  styleUrls: ['./bs-dashboard.component.scss']
})
export class BsDashboardComponent implements OnInit {
  faCoffee = faCoffee;


  constructor() { }

  ngOnInit(): void {
  }

}
