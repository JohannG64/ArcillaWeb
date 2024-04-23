import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private readonly router = inject(Router);

  homeRedirect(){
    this.router.navigate(['/home']);
  } 
  productsRedirect(){
    this.router.navigate(['/products']);
  } 
  proyectsRedirect(){
    this.router.navigate(['/proyects']);
  } 
  usRedirect(){
    this.router.navigate(['/us']);
  } 
  productIndividualRedirect(){
    this.router.navigate(['/products/L1020']);
  }  
  whatsappRedirect(urlWhatsapp: string){
    window.open(urlWhatsapp);
  }  
}
