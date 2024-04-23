import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  result: any;
  constructor(private http: HttpClient) { }

  async getListImages(action:string ) {
    const url = 'https://localhost:7049'+'/api/Home/'+action;
    const response$ = this.http.get(url);
    await lastValueFrom(response$).then(response =>{
      if(response != undefined){
        this.result = response;
      }
    }).catch(exception =>{
      console.log(exception);
    });
    return this.result;
  }
}
