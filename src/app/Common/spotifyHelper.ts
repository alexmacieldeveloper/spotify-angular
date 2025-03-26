import { addMilliseconds, format } from "date-fns";
import { IArtist } from "../interfaces/IArtist";
import { IMusic } from "../interfaces/IMusic";
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

export function SpotifyArtistFromArtist(spotifyArtist: SpotifyApi.ArtistObjectFull) : IArtist {
  return {
    id: spotifyArtist.id,
    imageUrl: spotifyArtist.images.sort((a,b) => a.width - b.width).pop().url,
    name: spotifyArtist.name,
  }
}

export function SpotifyTrackFromMusic(spotifyTrack: SpotifyApi.TrackObjectFull) : IMusic {
  const msFromMinuts = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  }
  return {
    id: spotifyTrack.uri,
    title: spotifyTrack.name,
    album: {
      id: spotifyTrack.album.id,
      imageUrl: spotifyTrack.album.images.shift().url,
      name: spotifyTrack.album.name
    },
    artists: spotifyTrack.artists.map(artist => ({
      id: artist.id,
      name: artist.name
    })),
    time: msFromMinuts(spotifyTrack.duration_ms)
  }
}