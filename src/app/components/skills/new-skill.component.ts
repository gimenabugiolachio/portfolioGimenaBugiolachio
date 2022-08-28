import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string = '';
  icono: string = '';
  tipo: string = '';
  porcentaje: string = '';

  constructor(private skillsS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  /**No le puse el this.router.navigate[('')]; */
  onCreate(){
    const skills = new Skills(this.nombre, this.icono, this.tipo, this.porcentaje);
    this.skillsS.save(skills).subscribe(data =>{
      alert("Skill agregada correctamente");
    }, err =>{
      alert("Error al añadir skill")
    })
  }

}
