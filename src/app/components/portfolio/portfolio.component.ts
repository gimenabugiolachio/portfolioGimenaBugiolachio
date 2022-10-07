import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }



}
