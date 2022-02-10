import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public _ruta = Global.ruta;
  public isGallery: boolean = false;

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {}  

  fondoEnlaceClick(event: any) {
    var fondoEnlace = document.getElementById('fondo-enlace');
    var barraLateral = document.getElementById('barra-lateral-izquierda');

    fondoEnlace?.classList.remove('active');
    barraLateral?.classList.remove('active');

    event.preventDefault();
  }

  menuIconClick(event: any) {
    var fondoEnlace = document.getElementById('fondo-enlace');
    var barraLateral = document.getElementById('barra-lateral-izquierda');

    fondoEnlace?.classList.add('active');
    barraLateral?.classList.add('active');

    event.preventDefault();
  }  

  onWindowScroll(event: any) {
    var header = document.getElementById('header');
    
    if(window.scrollY > 80) {      
      header?.classList.add("header-scroll");
    } else {
      header?.classList.remove("header-scroll");
    }
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)?.scrollIntoView();
  }

  /*
  onClickHome() {
    location.reload();
  }*/

}
