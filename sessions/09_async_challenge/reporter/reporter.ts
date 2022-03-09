import { getWeather } from '../api/weather';

export const report = async (): Promise<string> => {
  // fetch the weather data
  const { rainfall, status, temperature } = await getWeather();

  // process the response
  const messages: string[] = [];
  if (rainfall > 0) {
    messages.push("You'll need your umbrella");
  }
  if (temperature < 10) {
    messages.push("You'll need your jacket");
  }
  if (temperature > 25 && status === 'sunny') {
    messages.push("You'll need some sunscreen");
  }

  return messages.join(". ");
}