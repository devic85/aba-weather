import { Forecast } from '../../services/api/weather.api.service';
import { ForecastMode, WeatherSettings } from '../../weather.interfaces';
export declare class WeatherForecastComponent {
    isGridForecast: boolean;
    mode: ForecastMode;
    settings: WeatherSettings;
    forecast: Forecast[];
    private _forecast;
}
