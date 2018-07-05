import { Inject, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { PoolingService } from '../poling.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/first';
var WeatherApiService = (function () {
    function WeatherApiService(http, poolingService, apiConfig) {
        this.http = http;
        this.poolingService = poolingService;
        this.apiConfig = apiConfig;
        this.poollingInterval = 60000 * 60;
    }
    WeatherApiService.prototype.currentWeather = function (queryParams) {
        return this.callApi(queryParams, '/weather').map(this.mapCurrentWeatherResponse.bind(this));
    };
    WeatherApiService.prototype.forecast = function (queryParams) {
        return this.callApi(queryParams, '/forecast').map(this.mapForecastResponse.bind(this));
    };
    WeatherApiService.prototype.callApi = function (queryParams, endpoint) {
        var params = this.mapQueryParams(queryParams);
        var requestOptions = this.getRequestOptions(params);
        var apiCall = this.http
            .get(this.apiConfig.baseUrl + "/" + endpoint, requestOptions)
            .map(function (resp) { return resp.json(); })
            .filter(function (el) { return !!el; });
        return this.wrapWithPoll(apiCall);
    };
    WeatherApiService.prototype.setTokenKey = function () {
        // Implement it in child service
        return '';
    };
    WeatherApiService.prototype.mapQueryParams = function (params) {
        // Implement it in child service
        return;
    };
    WeatherApiService.prototype.mapCurrentWeatherResponse = function (response) {
        // Implement it in child service
        return {};
    };
    WeatherApiService.prototype.mapForecastResponse = function (response) {
        // Implement it in child service
        return [];
    };
    WeatherApiService.prototype.mapResponseToIconUrl = function (response) {
        return '';
    };
    WeatherApiService.prototype.mapResponseToIconClass = function (response) {
        return '';
    };
    WeatherApiService.prototype.wrapWithPoll = function (apiCall) {
        return this.poolingService.execute(function () { return apiCall; }, this.poollingInterval);
    };
    WeatherApiService.prototype.getRequestOptions = function (queryParams) {
        return new RequestOptions({
            headers: new Headers(),
            params: this.getQueryParams(queryParams)
        });
    };
    WeatherApiService.prototype.getQueryParams = function (obj) {
        var queryParams = new URLSearchParams();
        queryParams.set(this.setTokenKey(), this.apiConfig.key);
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                queryParams.set(key.toString(), obj[key]);
            }
        }
        return queryParams;
    };
    WeatherApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherApiService.ctorParameters = function () { return [
        { type: Http, },
        { type: PoolingService, },
        { type: WeatherApiConfig, decorators: [{ type: Inject, args: ['WEATHER_CONFIG',] },] },
    ]; };
    return WeatherApiService;
}());
export { WeatherApiService };
var WeatherApiConfig = (function () {
    function WeatherApiConfig() {
        this.name = WeatherApiName.OPEN_WEATHER_MAP;
        this.key = 'provide secret key';
        this.baseUrl = 'http://api.openweathermap.org/data/2.5';
    }
    return WeatherApiConfig;
}());
export { WeatherApiConfig };
export var WeatherApiName;
(function (WeatherApiName) {
    WeatherApiName[WeatherApiName["OPEN_WEATHER_MAP"] = 'Open Weather Map'] = "OPEN_WEATHER_MAP";
})(WeatherApiName || (WeatherApiName = {}));
//# sourceMappingURL=weather.api.service.js.map