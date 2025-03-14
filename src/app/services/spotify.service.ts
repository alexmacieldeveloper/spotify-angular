import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { SpotifyConfiguration } from 'src/environments/environment';
import { SpotifyUserForUser } from '../Common/spotifyHelper';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  user: IUser;
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor() {
    this.spotifyApi = new Spotify();
   }

   async initializeUser() {
    if (!!this.user)
      return true;

    const token  = localStorage.getItem('token');

    if(!token)
      return false;

    try {
      
      this.defineAccessToken(token);
      await this.getSpotifyUser();
      return !!this.user;

    } catch (ex) {
      return false;
    }
   }


  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyUserForUser(userInfo);
  }
   
  getUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

  getTokenUrlCallback() {
    console.log(window.location.hash)
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    console.log(params)
    return params[0].split('=')[1];

    return '';
  }

  defineAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
