import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
var WeatherForecastChartWideComponent = (function () {
    function WeatherForecastChartWideComponent(helpers) {
        this.helpers = helpers;
    }
    WeatherForecastChartWideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-forecast-chart-wide',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n           "
                    ],
                    template: "\n    <div>\n\n    </div>\n\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastChartWideComponent.ctorParameters = function () { return [
        { type: WeatherHelpersService, },
    ]; };
    WeatherForecastChartWideComponent.propDecorators = {
        'forecast': [{ type: Input },],
    };
    return WeatherForecastChartWideComponent;
}());
export { WeatherForecastChartWideComponent };
//# sourceMappingURL=forecast-chart-wide.component.js.map