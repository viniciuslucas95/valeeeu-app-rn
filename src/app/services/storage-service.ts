import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {
  constructor(private readonly key: string) {}

  async saveDataAsync(data: string) {
    const jsonData = JSON.stringify(data);
    try {
      await AsyncStorage.setItem(this.key, jsonData);
      return true;
    } catch (err) {
      return false;
    }
  }

  async getDataAsync(): Promise<string | undefined> {
    try {
      const result = await AsyncStorage.getItem(this.key);
      if (!result) throw new Error();
      const parsedResult = JSON.parse(result);
      return parsedResult;
    } catch (err) {
      return undefined;
    }
  }

  async deleteDataAsync(): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(this.key);
      return true;
    } catch (err) {
      return false;
    }
  }
}
