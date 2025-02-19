import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductInfo } from '../product-info';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <hr><h1>Product catalog</h1>
    <section class="results">
      <app-product *ngFor="let p of productInfoList" [productInfo] = "p"></app-product>
    </section>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  productInfoList : ProductInfo[]= [
    {
      name: 'Ноутбук ASUS TUF Gaming 15.6" / 16 Гб / SSD 512 Гб / Без ОС / 90NR0JV7-M003Y0',
      description: `      
      Максимальная частота процессора : 4500.0 МГц
      Процессор : AMD Ryzen 7 7435H
      Базовая частота процессора : 3100.0 МГц
      `,
      photoURL: ['assets/f.jpg'],
      rating : 5.0,
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-15-6-16-gb-ssd-512-gb-bez-os-90nr0jv7-m003y0-130612213/?c=750000000'
    },
    {
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      description: `      
      Типгарнитура
      Видвкладыши
      Назначениедля любых задач
      Подключениебеспроводное
      Тип акустического оформленияоткрытые
      Частота воспроизведения20 - 20000 Гц
      Импеданс16.0 Ом
      Чувствительность96.0 дБ
      Вес4.28 г
      `,
      photoURL: ['assets/ap.jpg'],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      photoURL: ['assets/third.jpeg'],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      description: `
      Максимальная частота процессора3400.0 МГц
      ПроцессорApple M2
      Базовая частота процессора2000.0 МГц
      Количество ядер процессора8 ядер
      `,
      photoURL: ['assets/macjpg.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      name: 'Миксер 7Speeds белый',
      description: `      
      Типручной
      Мощность260.0 Вт
      Число скоростей7
      Количество насадок2
      Насадкивенчик для взбивания, крюки для теста
      ТурборежимДа
      Материал корпусапластик
      `,
      photoURL: ['assets/bljpg.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/7speeds-belyi-109891608/?c=750000000'
    },
    {
      name: 'Микрофон OEM K8 Lightning',
      description: `
      Основные характеристики
      Типдинамический
      Конструкцияпетличный (клипса)
      Назначениеуниверсальный
      Тип подключениябеспроводной
      Чувствительность36.0 дБ
      РадиосистемаНет
      `
      ,
      photoURL: ['assets/micjpg.jpg'],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/oem-k8-lightning-117372435/?c=750000000'
    },
    {
      name: 'Карта памяти Hoco Flash Micro SD 16GB',
      description: `
      ТипmicroSD
      Объем памяти16 Гб
      Класс скоростиClass 10
      Скорость записи данных85.0 МБ/с
      Скорость чтения данных85.0 МБ/с
      `,
      photoURL: ['assets/f3.jpg'],
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/hoco-flash-micro-sd-16gb-101010299/?c=750000000'
    },
    {
      name: 'Карта памяти Hoco Flash Micro SD 64 Гб',
      description: `      
      ТипmicroSD
      Объем памяти64 Гб
      Класс скоростиClass 10
      Скорость записи данных96.0 МБ/с
      Скорость чтения данных95.0 МБ/с
            `,
      photoURL: ['assets/f2.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/hoco-flash-micro-sd-64-gb-103437435/?c=750000000'
    },
    {
      name: 'Kingston SDCS2/64Gb 64 Гб',
      description: `      
      ТипmicroSDXC
      Объем памяти64 Гб
      Класс скоростиClass 10
      Скорость записи данных80.0 МБ/с
      Скорость чтения данных100.0 МБ/с
      Комплектацияадаптер на SD
      `,
      photoURL: ['assets/s.jpg'],
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/kingston-sdcs2-64gb-64-gb-100081475/?c=750000000'
    },
    {
      name: 'Кухонные весы Generic SF-400',
      description: `      
      Типэлектронные
      Предел взвешивания10.0 кг
      Точность измерения1.0 г
      ТарокомпенсацияДа
      Счетчик калорийДа
      `,
      photoURL: ['assets/t.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000'
    },
  ];

}
