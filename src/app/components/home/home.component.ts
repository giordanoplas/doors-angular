import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public _ruta = Global.ruta;
  public sliderImages!: Array<string>;

  constructor() { 
    this.sliderImages = [
      this._ruta+"assets/images/sliders/slider1.png",
      this._ruta+"assets/images/sliders/slider2.png",
      this._ruta+"assets/images/sliders/slider3.png",
      this._ruta+"assets/images/sliders/slider4.png"
    ];
  }

  ngOnInit(): void {
  }

}
