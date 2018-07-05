import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastMode } from '../../weather.interfaces';
var WeatherForecastComponent = (function () {
    function WeatherForecastComponent() {
        this.isGridForecast = true;
    }
    Object.defineProperty(WeatherForecastComponent.prototype, "mode", {
        set: function (value) {
            if (!value) {
                return;
            }
            switch (value) {
                case ForecastMode.GRID:
                    this.isGridForecast = true;
                    break;
                case ForecastMode.DETAILED:
                    this.isGridForecast = false;
                    break;
                default:
                    this.isGridForecast = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeatherForecastComponent.prototype, "forecast", {
        get: function () {
            return this._forecast;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-forecast',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n             :host {\n               margin-top: 1em;\n               display: block;\n               width: 100%;\n               box-sizing: border-box;\n             }\n           "
                    ],
                    template: "\n    <weather-forecast-simple-grid\n      *ngIf=\"isGridForecast\"\n      [forecast]=\"forecast\"></weather-forecast-simple-grid>\n    <weather-forecast-detailed\n      *ngIf=\"!isGridForecast\"\n      [settings]=\"settings\"\n      [forecast]=\"forecast\"></weather-forecast-detailed>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastComponent.ctorParameters = function () { return []; };
    WeatherForecastComponent.propDecorators = {
        'mode': [{ type: Input },],
        'settings': [{ type: Input },],
        'forecast': [{ type: Input },],
    };
    return WeatherForecastComponent;
}());
export { WeatherForecastComponent };
//# sourceMappingURL=weather-forecast.component.js.map