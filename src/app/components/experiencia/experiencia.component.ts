import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[] = [];
  
  faPenToSquare=faPenToSquare;
  faCirclePlus=faCirclePlus;
  faTrashCan=faTrashCan;

 

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.agregarExp();
    if(this.tokenService.getToken()){
      this,this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }


  agregarExp(): void{
    this.sExperiencia.lista().subscribe(data =>{this.experiencia = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{this.agregarExp();
       }, err => {
          alert('No se pudo eliminar experiencia');
        }
      )
    }
  }
}



