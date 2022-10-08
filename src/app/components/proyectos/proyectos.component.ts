import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';



import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay, SwiperOptions } from 'swiper';
SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ProyectosComponent implements OnInit {

  config: SwiperOptions = {
    loopedSlides: 5,
    initialSlide: 0,
    spaceBetween: 10,
    navigation: true,
    centeredSlides: true,
    keyboard: {
      enabled: true
    },
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      clickable: true
    },
    autoplay: true,
    speed: 1000,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      930: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  }



  proyectos: Proyectos[] = [];

  faPenToSquare = faPenToSquare;
  faCirclePlus = faCirclePlus;
  faTrashCan = faTrashCan;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;


  constructor(private proyectosS: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.agregarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  agregarProyecto(): void {
    this.proyectosS.lista().subscribe(data => {
      this.proyectos = data;
    }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectosS.delete(id).subscribe(data => {
        this.agregarProyecto();
      }, err => {
        alert("No se pudo eliminar proyecto");
      })
    }
  }
}