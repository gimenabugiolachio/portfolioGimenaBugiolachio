import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  acercaDe: AcercaDe[] = [];

  faPenToSquare = faPenToSquare;
  faCircle = faCircle;
  faEnvelope=faEnvelope;
  faWhatsapp=faWhatsapp;
  faGears=faGears;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faGithub=faGithub;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faPerson=faPerson;
  
 



  constructor(private SacercaDe: AcercaDeService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.agregarInfo();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  agregarInfo(): void {
    this.SacercaDe.lista().subscribe(data => {
      this.acercaDe = data;
    }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.SacercaDe.delete(id).subscribe(data => {
        this.agregarInfo();
      }, err => {
        alert("No se pudo eliminar información");
      }
      )
    }
  }
}
