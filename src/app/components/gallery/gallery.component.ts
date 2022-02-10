import { Component, Input, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public _ruta = Global.ruta;
  public gallery: any;
  public image: any;
  public buyURL: string = "";

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getDataGallery();
  }

  private getDataGallery() {
    this._route.params.subscribe((params) => {
      let data = params.data;
      if(data != null) {
        this.setGallery(data);
      }
    });
  }

  private setGallery(data: string) {
    switch(data) {
      case 'Pivot Glass Doors': 
        this.gallery = {
          name: data,
          images: [
            'pivot/PD-0001.jpg', 'pivot/PD-0002.jpg', 'pivot/PD-0003.jpg', 'pivot/PD-0004.jpg', 'pivot/PD-0005.jpg', 'pivot/PD-0006.jpg', 
            'pivot/PD-0007.jpg', 'pivot/PD-0008.jpg', 'pivot/PD-0009.jpg', 'pivot/PD-0010.jpg', 'pivot/PD-0011.jpg', 'pivot/PD-0012.jpg', 
            'pivot/PD-0013.jpg', 'pivot/PD-0014.jpg', 'pivot/PD-0015.jpg'
          ]
        }
        this.buyURL = "https://glass-door.us/internal-doors/pivot-glass-doors/";
        break;
      case 'Hinged Doors':
        this.gallery = {
          name: data,
          images: [
            'hinged/HGD-HH-0006.jpg', 'hinged/HGD-HH-0017.jpg', 'hinged/HGD-HH-0019.jpg', 'hinged/HGD-HH-0023.jpg', 'hinged/HGD-HH-0030.jpg', 'hinged/HGD-HH-0039.jpg', 'hinged/HGD-HH-0044.jpg', 
            'hinged/HGD-HH-0046.jpg', 'hinged/HGD-HH-0048.jpg', 'hinged/HGD-HH-0052.jpg', 'hinged/HGD-HH-0067.jpg', 'hinged/HGD-HH-0072.jpg', 'hinged/HGD-HH-0080.jpg', 'hinged/HGD-HH-0086.jpg', 
            'hinged/HGD-HH-0088.jpg'
          ]
        }   
        this.buyURL = "https://glass-door.us/internal-doors/interior-hinged-doors/";     
        break;
      case 'Sliding Barn Doors':
        this.gallery = {
          name: data,
          images: [
            'sliding/CSGD-V1000-0002.jpg', 'sliding/SGD-ALU100-0001.jpg', 'sliding/SGD-ALU100-0011.jpg', 'sliding/SGD-ALU100-0012.jpg', 'sliding/SGD-ALU100-0013.jpg', 
            'sliding/SGD-ALU100-0021.jpg', 'sliding/SGD-ALU100-0028.jpg', 'sliding/SGD-ALU100-0036.jpg', 'sliding/SGD-ALU100-0037.jpg', 'sliding/SGD-ALU100-0042.jpg', 
            'sliding/SGD-ALU100-0064.jpg', 'sliding/SGD-ALU100-0070.jpg', 'sliding/SGD-ALU100-0071.jpg', 'sliding/SGD-ALU100-0088.jpg', 'sliding/SGD-ALU100-0092.jpg',
            'sliding/SGD-ALU100-00131.jpg', 'sliding/SGD-ALU100-00132.jpg', 'sliding/SGD-ALU100-0200.jpg', 'sliding/SGD-ALU100-0235.jpg', 'sliding/SGD-ALU100-0256.jpg'
          ]
        }
        this.buyURL = "https://glass-door.us/internal-doors/sliding-barn-doors/";        
        break;
      case 'Pocket Doors':
        this.gallery = {
          name: data,
          images: [
            'pocked/PSGD-0001.jpg', 'pocked/PSGD-0003.jpg', 'pocked/PSGD-0006.jpg', 'pocked/PSGD-0009.jpg', 'pocked/PSGD-0012.jpg', 'pocked/PSGD-0016.jpg', 
            'pocked/PSGD-0022.jpg', 'pocked/PSGD-0026.jpg', 'pocked/PSGD-0027.jpg', 'pocked/PSGD-0031.jpg', 'pocked/PSGD-0034.jpg', 'pocked/PSGD-0042.jpg', 
            'pocked/PSGD-0044.jpg', 'pocked/PSGD-0048.jpg', 'pocked/PSGD-0049.jpg', 'pocked/PSGD-0050.jpg', 'pocked/PSGD-0057.jpg', 'pocked/PSGD-0064.jpg', 
            'pocked/PSGD-0200.jpg'
          ]
        }
        this.buyURL = "https://glass-door.us/internal-doors/sliding-pocket-doors/";        
        break;
      case 'Bypass Sliding Closet Doors':
        this.gallery = {
          name: data,
          images: [
            'bypass/CWD-0001.jpg', 'bypass/CWD-0002.jpg', 'bypass/CWD-0004.jpg', 'bypass/CWD-0011.jpg', 'bypass/CWD-0013.jpg'
          ]
        }  
        this.buyURL = "https://glass-door.us/glass-door.us/internal-doors/sliding-closet-doors/";      
        break;
      case 'Frameless Glass Shower Screen':
        this.gallery = {
          name: data,
          images: [
            'frameless/FSS-0004.jpg', 'frameless/FSS-0008.jpg', 'frameless/FSS-0011.jpg', 'frameless/FSS-0014.jpg', 'frameless/FSS-0015.jpg', 'frameless/FSS-0016.jpg',
            'frameless/FSS-0017.jpg', 'frameless/FSS-0018.jpg', 'frameless/FSS-0019.jpg', 'frameless/FSS-0022.jpg', 'frameless/FSS-0024.jpg', 'frameless/FSS-0028.jpg'
          ]
        }
        this.buyURL = "https://glass-door.us/internal-doors/shower-screens-doors/";        
        break;
      default:
        this.gallery = null;
    }     
  }

  galleryModal(image: string, content: any) {
    this._modalService.open(content, { ariaLabelledBy: content, windowClass: 'modal-badge', centered: true, size: 'lg' });
    this.image = image;
  }  

  closeModal() {
    if (this._modalService.hasOpenModals()) {
      this._modalService.dismissAll();
    }
  }

}
