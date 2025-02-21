import { Component , Input } from '@angular/core';
import { ProductInfo } from '../../product-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productInfo! : ProductInfo ; 
  
  
  getWhatsAppLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.productInfo.name + ' - ' + this.productInfo.link)}`;
  }
  getTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.productInfo.link)}&text=${encodeURIComponent(this.productInfo.name)}`;
  }
}
