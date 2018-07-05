export declare class WeatherSettings {
    location: WeatherQueryParams;
    scale: TemperatureScale;
    backgroundColor?: string;
    color?: string;
    width?: any;
    height?: any;
    showWind?: boolean;
    showDetails?: boolean;
    showForecast?: boolean;
    language?: string;
    forecastMode?: ForecastMode;
    layout?: WeatherLayout;
}
export declare enum ForecastMode {
    GRID,
    DETAILED,
}
export declare enum TemperatureScale {
    CELCIUS,
    KELVIN,
    FAHRENHEIT,
}
export interface WeatherQueryParams {
    cityId?: number;
    cityName?: string;
    latLng?: {
        lat: number;
        lng: number;
    };
    zipCode?: number;
    units?: TemperatureScale;
    lang?: string;
}
export declare enum WeatherLayout {
    WIDE,
    NARROW,
}
