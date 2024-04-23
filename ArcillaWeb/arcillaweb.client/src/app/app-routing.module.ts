import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ProductIndividualComponent } from './product-individual/product-individual.component';

const routes: Routes =[
  {
    path: '', redirectTo:'home', pathMatch: 'full'
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'productsUse/:id', component: ProductsComponent
  },
  {
    path: 'proyects', component: ProyectsComponent
  },
  {
    path: 'us', component: WhyUsComponent
  },
  {
    path: 'home',component: HomeComponent
  },
  {
    path: 'products/:id', component: ProductIndividualComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
