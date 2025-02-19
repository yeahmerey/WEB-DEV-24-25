import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfo } from '../product-info';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="product-image" [src]="productInfo.photoURL" alt="photo of {{productInfo.name}}">
      <h2 class="product-name">{{productInfo.name}}</h2>
      <p class="product-description">{{productInfo.description}}</p>
      <p class="product-rating">{{productInfo.rating}}</p>
      <a class="product-link"[href]="productInfo.link" target="_blank">More</a>
      <div class="share-buttons">
        <a [href]="getWhatsAppLink()" target="_blank">Share on WhatsApp</a><br>
        <a [href]="getTelegramLink()" target="_blank">Share on Telegram</a>
      </div>
      </section>
  `,
  styleUrls: ['./product.component.css']
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
