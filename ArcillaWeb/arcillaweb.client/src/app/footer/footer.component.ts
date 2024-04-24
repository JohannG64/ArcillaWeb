import { Component, inject } from '@angular/core';
import { IconService } from '@visurel/iconify-angular';
import { Use } from '../Model/use.model';
import { ProductService } from '../Services/Product/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})



export class FooterComponent {
  uses!: Use[];
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  constructor(){
    this.loadCategories();
  }

  async loadCategories(){
    this.uses = await this.productService.getListProducts("GetListUses"); 
  }

  productsUseRedirect(id:string){
    this.router.navigate(['/productsUse/' + id]);
  }
}
