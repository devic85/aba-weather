import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TemperatureScale } from '../weather-current-temperature/current-temperature.component';
var WeatherCurrentWindComponent = (function () {
    function WeatherCurrentWindComponent() {
    }
    Object.defineProperty(WeatherCurrentWindComponent.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (value) {
            this._scale = value;
            this.unit = this.mapScaleToText(this._scale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeatherCurrentWindComponent.prototype, "deg", {
        get: function () {
            return this._deg;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this._deg = value;
            this.windIcon = "wi wi-wind from-" + this._deg + "-deg";
        },
        enumerable: true,
        configurable: true
    });
    WeatherCurrentWindComponent.prototype.mapScaleToText = function (scale) {
        switch (scale) {
            case TemperatureScale.CELCIUS:
            case TemperatureScale.KELVIN:
                return 'm/s';
            case TemperatureScale.FAHRENHEIT:
                return 'mil/h';
            default:
                return '';
        }
    };
    WeatherCurrentWindComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-current-wind',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n    :host {\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      font-size: 0.8em;\n      min-height: 1.3em;\n    }\n    i {\n      margin-left: 0.3em;\n      font-size: 1.6em;\n    }\n  "
                    ],
                    template: "\n    <span>Wind {{ speed }} {{ unit }}</span>\n   <i [class]=\"windIcon\"></i>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentWindComponent.ctorParameters = function () { return []; };
    WeatherCurrentWindComponent.propDecorators = {
        'scale': [{ type: Input },],
        'deg': [{ type: Input },],
        'speed': [{ type: Input },],
    };
    return WeatherCurrentWindComponent;
}());
export { WeatherCurrentWindComponent };
//# sourceMappingURL=weather-current-wind.component.js.map