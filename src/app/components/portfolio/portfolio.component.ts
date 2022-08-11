import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
faUser=faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
