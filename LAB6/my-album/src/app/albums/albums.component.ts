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
  loaded : boolean = false ; 

  constructor(private albumsService : AlbumsService) {
    //this.albums = ALBUMS; 
  }
  ngOnInit(){
    this.loaded = false ; 
    this.albumsService.getAlbums().subscribe((albums : Album[]) =>{
      this.albums = albums ;
      this.loaded = true; 
    })
  }
}
