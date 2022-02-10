import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'otto-sohn';
  public isGallery: boolean = false;

  constructor(
    private _router: Router
  ) {
    this.isGallery = window.location.href.includes("gallery")    
  }

}
