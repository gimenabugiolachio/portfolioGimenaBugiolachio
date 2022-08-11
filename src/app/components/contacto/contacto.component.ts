import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  faPenToSquare=faPenToSquare;
  faEnvelope=faEnvelope;
  faWhatsapp=faWhatsapp;
  faFacebookMessenger=faFacebookMessenger;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faGithub=faGithub;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  
  constructor() { }

  ngOnInit(): void {
  }

}
