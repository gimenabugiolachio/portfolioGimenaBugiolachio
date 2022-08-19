import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
educacion: Educacion[]=[];

faCirclePlus= faCirclePlus;
faPenToSquare=faPenToSquare;
faAnglesRight=faAnglesRight;
faTrashCan= faTrashCan;

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.agregarEduc();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  agregarEduc(): void{
    this.educacionS.lista().subscribe(
      data =>{
          this.educacion = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(data =>{
        this.agregarEduc();
      }, err => {
        alert("No se pudo eliminar educación");
      }
      )
    }
  }


}
