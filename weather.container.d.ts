import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { CurrentWeather, Forecast, WeatherApiService } from './services/api/weather.api.service';
import { WeatherSettings } from './weather.interfaces';
export declare class WeatherContainer implements OnDestroy {
    private weatherApi;
    private changeDetectorRef;
    private renderer;
    private element;
    background: string;
    color: string;
    width: string;
    height: string;
    forecast: Forecast[] | null;
    currentWeather: CurrentWeather | null;
    settings: WeatherSettings;
    isWideLayout: boolean;
    subscriptionCurrentWeather: Subscription;
    subscriptionForecast: Subscription;
    currentWeather$: Observable<CurrentWeather>;
    forecast$: Observable<Forecast[]>;
    isMouseOn: boolean;
    private _settings;
    constructor(weatherApi: WeatherApiService, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, element: ElementRef);
    ngOnDestroy(): void;
    private onMouseEnter();
    private onMouseLeave();
    getWeather(): void;
    currentWeatherCall(): Observable<CurrentWeather>;
    forecastCall(): Observable<Forecast[]>;
}
