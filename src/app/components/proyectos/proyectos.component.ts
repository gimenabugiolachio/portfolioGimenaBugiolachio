import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
 

export class ProyectosComponent implements OnInit {
  faPenToSquare=faPenToSquare;
  faCircleChevronLeft=faCircleChevronLeft;
  faCircleChevronRight=faCircleChevronRight;

  
  constructor() { }

  ngOnInit(): void {
  }


}