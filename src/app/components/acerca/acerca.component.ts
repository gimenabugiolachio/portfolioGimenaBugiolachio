import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
faPenToSquare=faPenToSquare;
faCircle=faCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
