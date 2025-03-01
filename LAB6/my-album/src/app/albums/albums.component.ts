import { Component } from '@angular/core';
import { ALBUMS } from '../../fake-db';
import { Album } from '../../models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums !: Album[];

  constructor() {
    this.albums = ALBUMS; 
  }
}
