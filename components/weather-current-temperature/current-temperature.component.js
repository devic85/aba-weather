import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var WeatherCurrentTempComponent = (function () {
    function WeatherCurrentTempComponent() {
        this._deg = TemperatureScale.CELCIUS;
    }
    Object.defineProperty(WeatherCurrentTempComponent.prototype, "deg", {
        get: function () {
            return this._deg;
        },
        set: function (value) {
            this._deg = value;
            switch (value) {
                case TemperatureScale.CELCIUS:
                    this.unitSymbol = 'C';
                    break;
                case TemperatureScale.FAHRENHEIT:
                    this.unitSymbol = 'F';
                    break;
                case TemperatureScale.KELVIN:
                    this.unitSymbol = 'K';
                    break;
                default:
                    this.unitSymbol = 'C';
            }
        },
        enumerable: true,
        configurable: true
    });
    WeatherCurrentTempComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-current-temperature',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n  :host {\n    display: block;\n    line-height: 1.1em;\n  }\n    .deg {\n      letter-spacing: -0.13em;\n      position: relative;\n      left: -0.2em;\n    }\n  "
                    ],
                    template: "\n      {{ temp?.toFixed() }} <span *ngIf=\"temp\" class=\"deg\">&deg; {{ unitSymbol }}</span>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentTempComponent.ctorParameters = function () { return []; };
    WeatherCurrentTempComponent.propDecorators = {
        'temp': [{ type: Input },],
        'deg': [{ type: Input },],
    };
    return WeatherCurrentTempComponent;
}());
export { WeatherCurrentTempComponent };
export var TemperatureScale;
(function (TemperatureScale) {
    TemperatureScale[TemperatureScale["CELCIUS"] = 'celcius'] = "CELCIUS";
    TemperatureScale[TemperatureScale["KELVIN"] = 'kelvin'] = "KELVIN";
    TemperatureScale[TemperatureScale["FAHRENHEIT"] = 'fahrenheit'] = "FAHRENHEIT";
})(TemperatureScale || (TemperatureScale = {}));
//# sourceMappingURL=current-temperature.component.js.map