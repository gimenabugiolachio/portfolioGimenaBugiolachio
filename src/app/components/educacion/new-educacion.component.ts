import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  detallesE: string = '';
  descripcionE: string = '';
  fechaInicioE: string = '';
  fechaFinE: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.detallesE, this.fechaInicioE, this.fechaFinE);
    this.sEducacion.save(educacion).subscribe(data =>{
        alert("Educación añadida");
        this.router.navigate(['']);
    }, err => {
      alert("Fallo al añadir educación");
      this.router.navigate(['']);
      }
    )
  }
}


