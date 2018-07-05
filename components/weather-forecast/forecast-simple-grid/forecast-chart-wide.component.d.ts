import { Forecast } from '../../../services/api/weather.api.service';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
export declare class WeatherForecastChartWideComponent {
    private helpers;
    forecast: Forecast[];
    constructor(helpers: WeatherHelpersService);
}
