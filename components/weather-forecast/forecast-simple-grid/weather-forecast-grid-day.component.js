import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherForecastGridDayComponent = (function () {
    function WeatherForecastGridDayComponent() {
    }
    WeatherForecastGridDayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-forecast-grid-day',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n   :host {\n     display: flex;\n     flex-direction: column;\n     justify-content: center;\n     align-items: center;\n     font-size: 1.2em;\n   }\n   weather-icon {\n     font-size: 1.4em;\n   }\n   .day {\n     font-size: 0.8em\n   }\n "
                    ],
                    template: "\n      <weather-icon [iconClass]=\"forecast?.iconClass\"></weather-icon>\n      <weather-current-temperature [temp]=\"forecast?.temp\"></weather-current-temperature>\n      <div class=\"day\">{{forecast?.data | date:'EEE' }}</div>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastGridDayComponent.ctorParameters = function () { return []; };
    WeatherForecastGridDayComponent.propDecorators = {
        'forecast': [{ type: Input },],
    };
    return WeatherForecastGridDayComponent;
}());
export { WeatherForecastGridDayComponent };
//# sourceMappingURL=weather-forecast-grid-day.component.js.map