import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-details',
  imports: [RouterModule , CommonModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album !: Album ; //Album Object 
  loaded : boolean ; 
  //album !: Album | undefined ; 
  constructor(private route : ActivatedRoute,private albumsService: AlbumsService){
    this.loaded = false ; 
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      this.loaded = false ;
      const albumId = Number(params.get('id'))
      this.albumsService.getAlbum(albumId).subscribe((album : Album) => {
        this.album = album ;
        this.loaded = true;  
      })
        // this.album = ALBUMS.find(album=>album.id === albumId) as Album; 
        
    });
  }
}
