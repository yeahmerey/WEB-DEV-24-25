import { Component , inject } from '@angular/core';
import { ProductInfo } from '../../model/product-info';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-searching',
  imports: [CommonModule , ProductsComponent, ],
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.css'
})
export class SearchingComponent {
  productList : ProductInfo[] = []; 
  productService : ProductService = inject(ProductService); 

  constructor() {
    this.productList = this.productService.getAllProducts(); 
  }
}
