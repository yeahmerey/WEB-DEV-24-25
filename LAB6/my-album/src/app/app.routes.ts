import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';

export const routes: Routes = [
    {
        path:'home' , component: HomeComponent, title : 'Home Page'
    },
    {
        path:'about' , component : AboutComponent , title : 'About Us'
    },
    {
        path:'albums', component : AlbumsComponent , title : 'Albums'
    }
];
