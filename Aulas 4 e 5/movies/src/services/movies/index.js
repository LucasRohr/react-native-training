import {API} from '../api';

export class MoviesService {
  static async getMovieById(movieId) {
    const response = await API.get(`/movies/${movieId}`);
    return response.data;
  }
}
