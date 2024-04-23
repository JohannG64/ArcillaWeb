import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../Services/HomeService/home.service';
import { Router } from '@angular/router';
import { Use } from '../Model/use.model';
import { ProductService } from '../Services/Product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{ 
  sliderImages =[]
  text=["prueba","20x20x20"]
  private readonly router = inject(Router);
  private readonly homeService = inject(HomeService);
  private readonly productService = inject(ProductService);
  uses!: Use[];
  constructor(){
    this.loadSlides();
    this.loadCategories();

  }

  async loadSlides(){
    var slideImg = await this.homeService.getListImages("GetListImages");
    this.sliderImages = slideImg;    
    
  }

  productsRedirect(){
    this.router.navigate(['/products']);
  } 

  async loadCategories(){
    this.uses = await this.productService.getListProducts("GetListUses"); 
  }

  productsUseRedirect(id:string){
    this.router.navigate(['/productsUse/' + id]);
  }
}
