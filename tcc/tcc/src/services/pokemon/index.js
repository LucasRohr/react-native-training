import {API} from '../api';

export class PokemonService {
  static async getAllPokemon() {
    const response = await API.get('/list');
    return response.data;
  }

  static async getPokemonDetailsById(pokemonId) {
    const response = await API.get(`/details/${pokemonId}`);
    return response.data;
  }
}
