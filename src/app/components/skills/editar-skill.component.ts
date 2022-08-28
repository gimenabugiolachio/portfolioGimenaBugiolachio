import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
  skills: Skills = null;

  constructor(private skillsS: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsS.detail(id).subscribe(data =>{
      this.skills = data;
    }, err =>{
      alert("Error al modificar skill");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsS.update(id, this.skills).subscribe(data =>{
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar skill");
      this.router.navigate(['']);
    })
  }

}
