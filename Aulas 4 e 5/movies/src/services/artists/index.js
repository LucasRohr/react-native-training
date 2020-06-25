import {API} from '../api';

export class ArtistsService {
  static async getAllArtists() {
    const response = await API.get('/artists');
    return response.data;
  }

  static async getArtistById(artistId) {
    const response = await API.get(`/artists_details/${artistId}`);
    return response.data;
  }
}
