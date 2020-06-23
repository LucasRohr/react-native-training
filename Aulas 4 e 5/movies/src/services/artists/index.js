import {API} from '../api';

export class ArtistsService {
  static async getAllArtists() {
    const response = await API.get('/artists');
    return response.data;
  }
}
