import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { error } from 'console';

@Injectable()
export class AppService {
  private readonly weatherApiKey = process.env.OPEN_WEATHER_KEY;

  async getHello(visitorName: string, clientIp: string) {
      // Get location data based on IP
      console.log(clientIp)
      const response = await axios.get(`http://ip-api.com/json/${clientIp}`);
      const { city } = response.data;

      if (!city) {
        console.log(error)
        return { error: 'Could not determine the city from the IP address' };
      }
      // Get weather data based on city
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.weatherApiKey}&units=metric`);
      const { temp } = weatherResponse.data.main;

      return {
        client_ip: clientIp,
        location: city,
        greeting: `Hello, ${visitorName}!, the temperature is ${temp} degrees Celsius in ${city}`,
      };

  }
}
