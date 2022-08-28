import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';




@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
 

export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] =  [];

  faPenToSquare=faPenToSquare;
  faCircleChevronLeft=faCircleChevronLeft;
  faCircleChevronRight=faCircleChevronRight;
  faCirclePlus=faCirclePlus;
  faTrashCan=faTrashCan;

  
  constructor(private proyectosS: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.agregarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }



  agregarProyecto():void{
    this.proyectosS.lista().subscribe(data => {
      this.proyectos = data;
     }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(data => {
        this.agregarProyecto();
      }, err => {
        alert("No se pudo eliminar proyecto");
      })
    }
  }
}