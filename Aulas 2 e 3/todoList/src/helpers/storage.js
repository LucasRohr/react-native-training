import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

export class StorageHelper {
  static async setItem(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      Alert.alert('Erro ao adicionar lista de To Do na storage');
    }
  }

  static async getItem(key) {
    try {
      const result = await AsyncStorage.getItem(key);
      return result ? JSON.parse(result) : [];
    } catch (error) {
      Alert.alert('Erro ao retornar lista de To Do da storage');
    }
  }
}
