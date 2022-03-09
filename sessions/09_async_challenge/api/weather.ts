import axios from 'axios';

interface WeatherResponse {
  rainfall: number;
  status: 'sunny' | 'overcast';
  temperature: number;
}

export const getWeather = async (): Promise<WeatherResponse> => {
  const response = await axios.get<WeatherResponse>('http://localhost:8080/weather');
  return response.data;
}