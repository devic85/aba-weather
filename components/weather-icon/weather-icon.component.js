import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var WeatherIconComponent = (function () {
    function WeatherIconComponent() {
    }
    WeatherIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-icon',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""],
                    template: "\n    <i *ngIf=\"iconClass\" [class]=\"iconClass\"></i>\n    <img *ngIf=\"iconImageUrl && !iconClass\" [src]=\"iconImageUrl\">\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherIconComponent.ctorParameters = function () { return []; };
    WeatherIconComponent.propDecorators = {
        'iconClass': [{ type: Input },],
        'iconImageUrl': [{ type: Input },],
        'title': [{ type: Input },],
    };
    return WeatherIconComponent;
}());
export { WeatherIconComponent };
//# sourceMappingURL=weather-icon.component.js.map