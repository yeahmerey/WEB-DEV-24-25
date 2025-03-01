import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../../models';
import { ALBUMS } from '../../fake-db';

@Component({
  selector: 'app-album-details',
  imports: [RouterModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album !: Album ; //Album Object 
  //album !: Album | undefined ; 
  constructor(private route : ActivatedRoute){

  }

  ngOnInit(){
    this.route.paramMap.subscribe((params)=>{
      const albumId = Number(params.get('id'))

        this.album = ALBUMS.find(album=>album.id === albumId) as Album; 

    });
  }
}
