import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { PoolingService } from '../poling.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';
import { WeatherQueryParams } from '../../weather.interfaces';
export declare abstract class WeatherApiService {
    protected http: Http;
    protected poolingService: PoolingService;
    apiConfig: WeatherApiConfig;
    poollingInterval: number;
    constructor(http: Http, poolingService: PoolingService, apiConfig: WeatherApiConfig);
    currentWeather(queryParams: WeatherQueryParams): Observable<CurrentWeather>;
    forecast(queryParams: WeatherQueryParams): Observable<Forecast[]>;
    protected callApi(queryParams: WeatherQueryParams, endpoint: string): Observable<any>;
    protected setTokenKey(): string;
    protected mapQueryParams(params: WeatherQueryParams): any;
    protected mapCurrentWeatherResponse(response: any): CurrentWeather;
    protected mapForecastResponse(response: any): Forecast[];
    protected mapResponseToIconUrl(response: any): string;
    protected mapResponseToIconClass(response: any): string;
    private wrapWithPoll(apiCall);
    private getRequestOptions(queryParams);
    private getQueryParams(obj);
}
export interface CurrentWeather {
    location: string;
    temp: number;
    pressure?: number;
    humidity?: number;
    minTemp?: number;
    maxTemp?: number;
    sunrise?: number;
    sunset?: number;
    iconClass?: string;
    iconUrl?: string;
    description?: string;
    wind?: {
        deg: number;
        speed: number;
    };
}
export interface Forecast extends CurrentWeather {
    data: Date;
}
export declare class WeatherApiConfig {
    name: WeatherApiName;
    key: string;
    baseUrl: string;
}
export declare enum WeatherApiName {
    OPEN_WEATHER_MAP,
}
