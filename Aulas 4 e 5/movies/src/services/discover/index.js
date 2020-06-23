import {API} from '../api';

export class DiscoverService {
  static async getAllDiscoveries() {
    const response = await API.get('/discover');
    return response.data;
  }
}
