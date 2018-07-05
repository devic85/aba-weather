import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
var WeatherForecastDetailedComponent = (function () {
    function WeatherForecastDetailedComponent(weatherHelpers) {
        this.weatherHelpers = weatherHelpers;
        this.forecastPerDay = [];
    }
    Object.defineProperty(WeatherForecastDetailedComponent.prototype, "forecast", {
        set: function (value) {
            if (!value) {
                return;
            }
            this._forecast = value;
            this.forecastPerDay = this.weatherHelpers.groupForecastsByDay(value);
        },
        enumerable: true,
        configurable: true
    });
    WeatherForecastDetailedComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-forecast-detailed',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""],
                    template: "\n    <ng-container *ngFor=\"let forecast of forecastPerDay\">\n      <weather-forecast-detail-day\n        [settings]=\"settings\"\n        [forecast]=\"forecast\"></weather-forecast-detail-day>\n    </ng-container>\n\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherForecastDetailedComponent.ctorParameters = function () { return [
        { type: WeatherHelpersService, },
    ]; };
    WeatherForecastDetailedComponent.propDecorators = {
        'forecast': [{ type: Input },],
        'settings': [{ type: Input },],
    };
    return WeatherForecastDetailedComponent;
}());
export { WeatherForecastDetailedComponent };
//# sourceMappingURL=forecast-detailed.component.js.map