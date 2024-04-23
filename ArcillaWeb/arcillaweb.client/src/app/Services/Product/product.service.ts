import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  result: any;
  constructor(private http: HttpClient) { }

  async getListProducts(action:string ) {
    const url = 'https://localhost:7049'+'/api/Product/'+action;
    const response$ = this.http.get(url);
    await lastValueFrom(response$).then(response =>{
      if(response != undefined){
        this.result = response;
      }
    }).catch(exception =>{
      console.log(exception)
    });
    return this.result;
  }

  async getProduct(action:string, id:string|null ) {
    const url = 'https://localhost:7049'+'/api/Product/'+action + id;
    const response$ = this.http.get(url);
    await lastValueFrom(response$).then(response =>{
      if(response != undefined){
        this.result = response;
      }
    }).catch(exception =>{
      console.log(exception)
    });
    return this.result;
  }
}
