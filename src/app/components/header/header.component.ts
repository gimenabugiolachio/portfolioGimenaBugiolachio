import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  faUser=faUser;
  faArrowRightFromBracket=faArrowRightFromBracket;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  login():void{
    this.router.navigate(['/login'])
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }



}
