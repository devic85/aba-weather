import { Forecast } from '../../../services/api/weather.api.service';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
import { WeatherSettings } from '../../../weather.interfaces';
export declare class WeatherForecastDetailedComponent {
    private weatherHelpers;
    forecast: Forecast[];
    settings: WeatherSettings;
    forecastPerDay: Array<Forecast[]>;
    private _forecast;
    constructor(weatherHelpers: WeatherHelpersService);
}
