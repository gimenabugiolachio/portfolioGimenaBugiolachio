import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';

  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(){
    const proyecto = new Proyectos(this.nombreP, this.descripcionP, this.imgP);
    this.sProyectos.save(proyecto).subscribe(data => {
      alert("Proyecto agregado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Fallo al añadir proyecto");
      this.router.navigate(['']);
    })
  }

}
