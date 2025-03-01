import { Component, OnInit } from '@angular/core';
import { ALBUMS } from '../../fake-db';
import { Album } from '../../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
@Component({
  selector: 'app-albums',
  imports: [CommonModule , RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums !: Album[];

  constructor(private albumsService : AlbumsService) {
    //this.albums = ALBUMS; 
  }
  ngOnInit(){
    this.albumsService.getAlbums().subscribe((albums : Album[]) =>{
      this.albums = albums ;
    })
  }
}
