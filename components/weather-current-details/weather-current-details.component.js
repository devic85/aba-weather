import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherCurrentDetailsComponent = (function () {
    function WeatherCurrentDetailsComponent() {
    }
    WeatherCurrentDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-current-details',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n    :host {\n      font-size: 0.8em;\n      text-align: center;\n      margin-top: 1em;\n    }\n    .row {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n    }\n    .row span {\n      margin: 0 0.3em;\n    }\n    .wi {\n      margin-right: 0.3em;\n    }\n  "
                    ],
                    template: "\n    <div class=\"row\">\n      <i class=\"wi wi-thermometer\"></i>\n      <span>\n          <span>Min: {{minTemp}}&deg;</span>\n          <span>Max: {{maxTemp}}&deg;</span>\n      </span>\n\n    </div>\n    <div class=\"row\">\n      <span><i class=\"wi wi-barometer\"></i>Pressure: {{pressure}}</span>\n      <span><i class=\"wi wi-humidity\"></i>Humidity: {{humidity}}%</span>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherCurrentDetailsComponent.ctorParameters = function () { return []; };
    WeatherCurrentDetailsComponent.propDecorators = {
        'maxTemp': [{ type: Input },],
        'minTemp': [{ type: Input },],
        'pressure': [{ type: Input },],
        'humidity': [{ type: Input },],
    };
    return WeatherCurrentDetailsComponent;
}());
export { WeatherCurrentDetailsComponent };
//# sourceMappingURL=weather-current-details.component.js.map