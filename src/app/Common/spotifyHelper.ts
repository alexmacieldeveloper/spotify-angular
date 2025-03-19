import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";

export function SpotifyUserForUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser{
   return {
     id: user.id,
     name: user.display_name,
     imageUrl: user.images.pop().url
   }
}

export function SpotifyPlaylistForPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url
  }

}