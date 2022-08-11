import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
faPenToSquare=faPenToSquare;
faAnglesRight=faAnglesRight;
  constructor() { }

  ngOnInit(): void {
  }

}
