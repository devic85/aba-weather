import { Forecast } from '../../../services/api/weather.api.service';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
export declare class WeatherForecastSimpleGridComponent {
    private weatherHelpers;
    forecastPerDay: Forecast[];
    forecast: Forecast[];
    private _forecast;
    constructor(weatherHelpers: WeatherHelpersService);
}
