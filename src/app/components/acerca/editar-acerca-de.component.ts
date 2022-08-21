import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {
  acercaDe: AcercaDe = null;


  constructor(private sAcercaDe: AcercaDeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sAcercaDe.detail(id).subscribe(data => {
      this.acercaDe = data;
    }, err => {
      alert("Error al modificar Acerca De");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sAcercaDe.update(id, this.acercaDe).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar Acerca De");
      this.router.navigate(['']);
    }
    )
  }
}
