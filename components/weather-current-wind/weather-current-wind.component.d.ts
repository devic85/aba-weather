import { TemperatureScale } from '../weather-current-temperature/current-temperature.component';
export declare class WeatherCurrentWindComponent {
    unit: string;
    scale: TemperatureScale;
    windIcon: string;
    deg: number;
    private _deg;
    speed: number;
    private _scale;
    mapScaleToText(scale: TemperatureScale): string;
}
