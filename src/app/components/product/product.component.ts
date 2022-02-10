import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public _ruta = Global.ruta;
  public sliderImages!: Array<string>;

  constructor(
    private _router: Router
  ) { 
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
