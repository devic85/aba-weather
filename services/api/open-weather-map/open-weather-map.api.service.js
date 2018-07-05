import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TemperatureScale } from '../../../components/weather-current-temperature/current-temperature.component';
import { PoolingService } from '../../poling.service';
import { WeatherApiConfig, WeatherApiService } from '../weather.api.service';
import { iconCodes } from './open-weather-map-to-weather-icons';
var OpenWeatherMapApiService = (function (_super) {
    tslib_1.__extends(OpenWeatherMapApiService, _super);
    function OpenWeatherMapApiService(http, poolingService, apiConfig) {
        var _this = _super.call(this, http, poolingService, apiConfig) || this;
        _this.http = http;
        _this.poolingService = poolingService;
        _this.apiConfig = apiConfig;
        _this.iconCodes = iconCodes;
        return _this;
    }
    OpenWeatherMapApiService.prototype.mapQueryParams = function (params) {
        var mapped = {
            id: params.cityId,
            q: params.cityName,
            lat: params.latLng ? params.latLng.lat : undefined,
            lon: params.latLng ? params.latLng.lng : undefined,
            zip: params.zipCode,
            units: params.units ? this.mapUnits(params.units) : undefined,
            lang: params.lang
        };
        return mapped;
    };
    OpenWeatherMapApiService.prototype.mapCurrentWeatherResponse = function (response) {
        if (!response) {
            return {};
        }
        var weather = {
            temp: response.main.temp,
            pressure: response.main ? response.main.pressure : undefined,
            humidity: response.main ? response.main.humidity : undefined,
            minTemp: response.main && response.main.temp
                ? response.main.temp_min
                : undefined,
            maxTemp: response.main && response.main.temp
                ? response.main.temp_max
                : undefined,
            sunrise: response.sys ? response.sys.sunrise : undefined,
            sunset: response.sys ? response.sys.sunset : undefined,
            location: response.name,
            iconUrl: this.mapResponseToIconUrl(response),
            iconClass: this.mapResponseToIconClass(response),
            description: response.weather[0].description,
            wind: {
                deg: response.wind.deg,
                speed: response.wind.speed
            }
        };
        return weather;
    };
    OpenWeatherMapApiService.prototype.mapForecastResponse = function (response) {
        var _this = this;
        if (!response) {
            return [];
        }
        var city = response.city;
        return response.list.map(function (el) {
            var forecast = {
                temp: el.main.temp,
                pressure: el.main.pressure,
                humidity: el.main.humidity,
                minTemp: el.main.temp_min,
                maxTemp: el.main.temp_max,
                location: city.name,
                iconClass: _this.mapResponseToIconClass(el),
                description: el.weather[0].description,
                data: new Date(el.dt * 1000),
                wind: {
                    deg: el.wind.deg,
                    speed: el.wind.speed
                }
            };
            return forecast;
        });
    };
    OpenWeatherMapApiService.prototype.mapResponseToIconUrl = function (response) {
        return "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    };
    OpenWeatherMapApiService.prototype.mapResponseToIconClass = function (response) {
        var code = response.weather[0].id;
        var prefix = 'wi wi-';
        var icon = iconCodes[code].icon;
        // If we are not in the ranges mentioned above, add a day/night prefix.
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
            icon = 'day-' + icon;
        }
        icon = prefix + icon;
        return icon;
    };
    OpenWeatherMapApiService.prototype.setTokenKey = function () {
        return 'APPID';
    };
    OpenWeatherMapApiService.prototype.mapUnits = function (unit) {
        switch (unit) {
            case TemperatureScale.CELCIUS:
                return 'metric';
            case TemperatureScale.FAHRENHEIT:
                return 'imperial';
            case TemperatureScale.KELVIN:
                return;
            default:
                return 'metric';
        }
    };
    OpenWeatherMapApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    OpenWeatherMapApiService.ctorParameters = function () { return [
        { type: Http, },
        { type: PoolingService, },
        { type: WeatherApiConfig, },
    ]; };
    return OpenWeatherMapApiService;
}(WeatherApiService));
export { OpenWeatherMapApiService };
//# sourceMappingURL=open-weather-map.api.service.js.map