import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
var WeatherActionsComponent = (function () {
    function WeatherActionsComponent() {
        this.update = new EventEmitter();
    }
    WeatherActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'weather-actions',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [
                        "\n    button {\n      border: none;\n      background: transparent;\n      cursor: pointer;\n      font-size: 1.6em;\n      border-radius: 50%;\n      color: inherit;\n    }\n    button:hover {\n      background: rgba(0,0,0, 0.1);\n    }\n  "
                    ],
                    template: "\n    <button (click)=\"update.emit()\"><i class=\"wi wi-refresh\"></i></button>\n  "
                },] },
    ];
    /** @nocollapse */
    WeatherActionsComponent.ctorParameters = function () { return []; };
    WeatherActionsComponent.propDecorators = {
        'update': [{ type: Output },],
    };
    return WeatherActionsComponent;
}());
export { WeatherActionsComponent };
//# sourceMappingURL=actions.component.js.map