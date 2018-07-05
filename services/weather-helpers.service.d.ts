import { Forecast } from './api/weather.api.service';
import { ChartData } from 'chart.js';
export declare class WeatherHelpersService {
    constructor();
    groupForecastsByDay(list: Forecast[]): Array<Forecast[]>;
    reduceToAveragePerDay(list: Forecast[]): Forecast[];
    mapForecastToCharts(forecast: Forecast[], borderColor?: string): ChartData;
    hexToRgbA(hex: string, opacity: string): string;
}
