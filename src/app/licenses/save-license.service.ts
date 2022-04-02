import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveLicenseService {

  constructor(private http:HttpClient, private router:Router) { }

  //connection to backend, to send license that will be screenshooted
  saveLicense(){
    const url = "http://localhost:3000/";
    return this.http.post(url,{url:this.router.url});
  }
}
