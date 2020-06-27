import {API} from '../api';

export class ItemsService {
  static async getAllItems() {
    const response = await API.get('/items');
    return response.data;
  }

  static async getItemDetailsById(itemId) {
    const response = await API.get(`/itemsDetails/${itemId}`);
    return response.data;
  }
}
