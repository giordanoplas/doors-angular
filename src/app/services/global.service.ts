import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class GlobalService {

    private dataurl: string;
    private contactoemailjson: string;

    private headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(
        private _http: HttpClient 
    ) {
        this.dataurl = Global.dataurl;
        this.contactoemailjson = "contacto_email_json.php";
    }

    sendContactEmail(contact: any): Observable<any> {
        let params = JSON.stringify(contact);
        return this._http.post(this.dataurl + this.contactoemailjson, params, { headers: this.headers });
    }
}