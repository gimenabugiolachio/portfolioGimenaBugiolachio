import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
experienciaLab: Experiencia = null; 


  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.experienciaLab = data;
    }, err => {
      alert('Error al modificar experiencia')
      this.router.navigate(['']);
    })
  }

Update(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sExperiencia.update(id, this.experienciaLab).subscribe(data => {
    this.router.navigate(['']);
  }, err => {
    alert('Error al modificar experiencia')
    this.router.navigate(['']);
  }
  )
}

}
