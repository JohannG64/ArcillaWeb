import { Component, inject } from '@angular/core';
import { HomeService } from '../Services/HomeService/home.service';
import { Product } from '../Model/product.model';
import { ProductService } from '../Services/Product/product.service';
import { Color } from '../Model/color.model';
import { ActivatedRoute, Router } from '@angular/router';
import { compilePipeFromMetadata } from '@angular/compiler';
import { Material } from '../Model/material.model';
import { Use } from '../Model/use.model';

@Component({
  selector: 'app-product-individual',
  templateUrl: './product-individual.component.html',
  styleUrl: './product-individual.component.css'
})
export class ProductIndividualComponent {
  sliderImages =[]
  text=["prueba","20x20x20"]
  private readonly homeService = inject(HomeService);
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  products!: Product[];
  product!: Product
  productColor!: string[];
  productUses!: string[];
  productTitle!: string;
  productDescription!: string;
  productPrice!: number;
  productDimension!: string;
  productWeight!: string;
  colors!: Color[];
  materials!: Material[];
  tableActive!: boolean;
  recomendationActive!: boolean;
  recomendationButtonActive!: boolean;
  nameColor!: string;
  codeColor!: string;
  private readonly router = inject(Router);
  page = 3;
  pageSize = 3;
  p: number = 1 ;
  uses!: Use[];
  constructor(){
    this.route.paramMap.subscribe(async (params) => {
      this.product = await this.productService.getProduct('GetProduct/', params.get('id'));
      this.loadProducts();
    })
    this.recomendationActive = true;
    this.tableActive = false;
    this.loadSlides();
    this.loadColors();
    this.loadMaterials();
    this.loadCategories();
  }   


  async loadMaterials(){
    this.materials = await this.productService.getListProducts("GetListMaterials"); 
  }
  
  async loadSlides(){
    var slideImg = await this.homeService.getListImages("GetListImages");
    this.sliderImages = slideImg;    
    
  }
  async loadProducts(){
    this.products = await this.productService.getListProducts("GetListProducts"); 
    this.productTitle = this.product.name;
    this.productPrice = this.product.price;
    this.productDescription = this.product.description;
    this.productColor = this.product.color.split(",");
    this.productUses = this.product.use.split(",");
    this.productDimension = this.product.width + "X" + this.product.height + "X" + this.product.large;
    this.productWeight = this.product.weight;
    this.initColor();
  }

  async loadColors(){
    this.colors = await this.productService.getListProducts("GetListColors"); 
    
  }
  
  async loadCategories(){
    this.uses = await this.productService.getListProducts("GetListUses"); 
  }

  productIndividualRedirect(reference:string){
    this.router.navigate(['/products/' + reference]);
  }

  productsRedirect(){
    this.router.navigate(['/products']);
  } 

  activateTable(){
    this.recomendationActive = false;
    this.tableActive = true;
  }

  activateRecomendations(){
    this.recomendationActive = true;
    this.tableActive = false;
  }

  changeColor(name: string, code:string){
    this.nameColor = name;
    this.codeColor = code;
  }
  initColor(){
    let name = "";
    let code = "";
    for(let color of this.colors){
      for(let prodColor of this.productColor){
        if(prodColor == color.id){
          this.nameColor = color.name;
          this.codeColor = color.code;
          break;
        }
      }
    }
  }
}
