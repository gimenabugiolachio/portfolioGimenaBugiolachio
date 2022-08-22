import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private sProyectos: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(data => {
      this.proyectos = data;
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.sProyectos.update(id, this.proyectos).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
  }

}
