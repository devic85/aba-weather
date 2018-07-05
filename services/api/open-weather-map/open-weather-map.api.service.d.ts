import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PoolingService } from '../../poling.service';
import { CurrentWeather, Forecast, WeatherApiConfig, WeatherApiService } from '../weather.api.service';
import { IconCodeType } from './open-weather-map-to-weather-icons';
import { WeatherQueryParams } from '../../../weather.interfaces';
export declare class OpenWeatherMapApiService extends WeatherApiService {
    protected http: Http;
    protected poolingService: PoolingService;
    apiConfig: WeatherApiConfig;
    iconCodes: IconCodeType;
    iconCodes$: Observable<any>;
    constructor(http: Http, poolingService: PoolingService, apiConfig: WeatherApiConfig);
    protected mapQueryParams(params: WeatherQueryParams): OpenWeatherMapLocationRequest;
    protected mapCurrentWeatherResponse(response: OpenWeatherMapCurrentWeatherResponse): CurrentWeather;
    protected mapForecastResponse(response: OpenWeatherMapForecastResponse): Forecast[];
    protected mapResponseToIconUrl(response: OpenWeatherMapCurrentWeatherResponse): string;
    protected mapResponseToIconClass(response: OpenWeatherMapCurrentWeatherResponse | OpenWeatherMapForecastResponseElement): string;
    protected setTokenKey(): string;
    private mapUnits(unit);
}
export interface OpenWeatherMapLocationRequest {
    id?: number;
    q?: string;
    lat?: number;
    lon?: number;
    zip?: number;
    units?: 'imperial' | 'metric';
    lang?: string;
}
export interface OpenWeatherMapCurrentWeatherResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }];
    base: string;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        message: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    id: number;
    name: string;
    cod: number;
}
export interface OpenWeatherMapForecastResponse {
    city: {
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        id: number;
        name: string;
    };
    message: number;
    cod: string;
    cnt: number;
    list: OpenWeatherMapForecastResponseElement[];
}
export interface OpenWeatherMapForecastResponseElement {
    clouds: {
        all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
        grnd_level: number;
        temp: number;
        pressure: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
        temp_kf: number;
        sea_level: number;
    };
    sys: {
        pod: string;
    };
    weather: [{
        id: number;
        main: string;
        description: string;
        icon: string;
    }];
    wind: {
        speed: number;
        deg: number;
    };
}
