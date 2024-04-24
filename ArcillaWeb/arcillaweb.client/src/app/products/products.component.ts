import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { HomeService } from '../Services/HomeService/home.service';
import { ProductService } from '../Services/Product/product.service';
import { Product } from '../Model/product.model';
import { Use } from '../Model/use.model';
import { Material } from '../Model/material.model';
import { Color } from '../Model/color.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from '../Model/productType.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  @ViewChild('myItems') myItems!: ElementRef;
  @ViewChild('myFilter') myFilter!: ElementRef;
  @ViewChild('myCheckbox') myCheckbox!: ElementRef;
  text: any;
  image: string | undefined;
  nameProduct: string | undefined;
  description: string | undefined;
  products!: Product[];
  productsDisplayed!: Product[];
  uses!: Use[];
  materials!: Material[];
  productTypes!: ProductType[];
  colors!: Color[];
  usesDisplayed!: string[];
  page = 2;
  pageSize = 2;
  p: number = 1 ;
  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);

  constructor(private renderer: Renderer2){
    this.loadProducts();
    this.loadProductTypes();
    this.loadCategories();
    this.loadMaterials();
    this.loadColors();
  }


  async loadProducts(){
    this.products = await this.productService.getListProducts("GetListProducts"); 
    this.productsDisplayed = [...this.products];
  }
  async loadProductTypes(){
    this.productTypes = await this.productService.getListProducts("GetListProductTypes"); 
  }
  async loadCategories(){
    this.uses = await this.productService.getListProducts("GetListUses"); 
  }

  async loadMaterials(){
    this.materials = await this.productService.getListProducts("GetListMaterials"); 
  }
  
  async loadColors(){
    this.colors = await this.productService.getListProducts("GetListColors"); 
    this.route.paramMap.subscribe(async (params) => {
      if(params.get('id') !== null){
        this.initFilterItemsByUse(params.get('id'));
      }
    })
  }
  
  filterItemsByUse() {
    const checkboxList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxUse");
    let i = 1;
    this.productsDisplayed = [];
    for(var checkbox of checkboxList){
      if(checkbox.checked){
        for (let product of this.products) {
          let useProduct!: string[];
          let productUse = product.use;
          useProduct = productUse.split(",");

          for(let useProd of  useProduct){
            if (useProd === i.toString() && !this.productsDisplayed.includes(product)) {
              this.productsDisplayed.push(product)
            } 
          }
          
        }
      }
      
      i++;
    }
    if(this.productsDisplayed.length === 0){
      this.productsDisplayed = this.products;
    }
  }

  initFilterItemsByUse(id: string | null) {
    console.log(id)
    console.log(this.myCheckbox)
    const checkboxList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxUse");
    let i = 1;
    this.productsDisplayed = [];
    for(var checkbox of checkboxList){
      if(id === i.toString()){
        checkbox.checked = true;
        for (let product of this.products) {
          let useProduct!: string[];
          let productUse = product.use;
          useProduct = productUse.split(",");

          for(let useProd of  useProduct){
            if (useProd === i.toString() && !this.productsDisplayed.includes(product)) {
              this.productsDisplayed.push(product)
            } 
          }
          
        }
      }
      
      i++;
    }
    if(this.productsDisplayed.length === 0){
      this.productsDisplayed = this.products;
    }
  }
  filterItemsByMaterial() {
    const checkboxList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxMaterial");
    let i = 0;
    this.productsDisplayed = [];
    for(var checkbox of checkboxList){
      if(checkbox.checked){
        for (let product of this.products) {
          
          let productMaterial = product.material;
          let idMaterial = i+1;
          if (productMaterial === idMaterial.toString() && !this.productsDisplayed.includes(product)) {
            this.productsDisplayed.push(product)
          } 
        }
      }
      
      i++;
    }
    if(this.productsDisplayed.length === 0){
      this.productsDisplayed = this.products;
    }
  }

  filterItemsByColor() {
    const checkboxList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxColor");
    let i = 0;
    this.productsDisplayed = [];
    for(var checkbox of checkboxList){
      if(checkbox.checked){
        for (let product of this.products) {
          let colorProduct!: string[];
          let productColor = product.color;
          colorProduct = productColor.split(",");

          for(let colorProd of  colorProduct){
            let idColor = i+1;
            if (colorProd === idColor.toString() && !this.productsDisplayed.includes(product)) {
              this.productsDisplayed.push(product)
            } 
          }
          
        }
      }
      
      i++;
    }
    if(this.productsDisplayed.length === 0){
      this.productsDisplayed = this.products;
    }
  }

  filterItemsByProductType() {
    const checkboxList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxProductType");
    let i = 0;
    this.productsDisplayed = [];
    for(var checkbox of checkboxList){
      if(checkbox.checked){
        for (let product of this.products) {
          
          let productType = product.typeProduct;
          let idProductType = i+1;
          if (productType === idProductType.toString() && !this.productsDisplayed.includes(product)) {
            this.productsDisplayed.push(product)
          } 
        }
      }
      
      i++;
    }
    if(this.productsDisplayed.length === 0){
      this.productsDisplayed = this.products;
    }
  }
  filterItems() {
    const filter = this.myFilter.nativeElement.value.toUpperCase();
    const cards = this.myItems.nativeElement.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      const title = cards[i].querySelector(".card-body h5.card-title");
      if (title && title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].setAttribute('style', 'display: block;');
      } else {
        cards[i].setAttribute('style', 'display: none;');
      }
    }
  }

  clearFilters(){
    this.myFilter.nativeElement.value = "";
    this.productsDisplayed = this.products;
    const checkboxUseList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxUse");
    const checkboxMaterialList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxMaterial");
    const checkboxColorList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxColor");
    const checkboxProductTypesList = this.myCheckbox.nativeElement.getElementsByClassName("checkboxProductType");
    for(let checkbox of checkboxUseList){
      checkbox.checked = false;
    }
    for(let checkboxMaterial of checkboxMaterialList){
      checkboxMaterial.checked = false;
    }
    for(let checkboxColor of checkboxColorList){
      checkboxColor.checked = false;
    }
    for(let checkboxColor of checkboxProductTypesList){
      checkboxColor.checked = false;
    }
  }
  clearAll(){
    const cards = this.myItems.nativeElement.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute('style', 'display: block;');
      }
  }

  eventCheck(event: any, use:string){
    return event.checked;
  }

  productIndividualRedirect(reference:string){
    this.router.navigate(['/products/' + reference]);
  }
}
