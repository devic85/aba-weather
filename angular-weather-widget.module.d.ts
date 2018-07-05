import { ModuleWithProviders } from '@angular/core';
import { Http } from '@angular/http';
import { WeatherApiConfig } from './services/api/weather.api.service';
import { PoolingService } from './services/poling.service';
import { OpenWeatherMapApiService } from './services/api/open-weather-map/open-weather-map.api.service';
export declare function apiServiceFactory(http: Http, pooling: PoolingService, openWeather: WeatherApiConfig): OpenWeatherMapApiService;
export declare function forRoot(config: WeatherApiConfig): ModuleWithProviders;
export declare class AngularWeatherWidgetModule {
    constructor();
    static forRoot: typeof forRoot;
}
export * from './weather.interfaces';
export { WeatherApiName } from './services/api/weather.api.service';
