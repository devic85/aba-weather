import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
var WeatherForecastSimpleGridComponent = (function () {
    function WeatherForecastSimpleGridComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
    }
    Object.defineProperty(WeatherForecastSimpleGridComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
            this.forecastPerDay = this.weatherHelpers.reduceToAveragePerDay(this._forecast);
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastSimpleGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-forecast-simple-grid',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n           :host {\n             display: flex;\n             width: 100%;\n             justify-content: space-between;\n           }\n           weather-forecast-grid-day {\n             margin: 0 0.4em;\n           }\n           "
                    ],
                    template: "\n    <ng-container *ngFor=\"let forecast of forecastPerDay\">\n      <weather-forecast-grid-day [forecast]=\"forecast\"></weather-forecast-grid-day>\n    </ng-container>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastSimpleGridComponent.ctorParameters = function () { return [
        { type: WeatherHelpersService, },
    ]; };
    WeatherForecastSimpleGridComponent.propDecorators = {
        'forecast': [{ type: Input },],
    };
    return WeatherForecastSimpleGridComponent;
}());
export { WeatherForecastSimpleGridComponent };
//# sourceMappingURL=forecast-simple-grid.component.js.map