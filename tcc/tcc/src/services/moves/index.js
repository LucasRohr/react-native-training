import {API} from '../api';

export class MovesService {
  static async getAllMoves() {
    const response = await API.get('/moves');
    return response.data;
  }

  static async getMoveDetailsById(moveId) {
    const response = await API.get(`/movesDetails/${moveId}`);
    return response.data;
  }
}
