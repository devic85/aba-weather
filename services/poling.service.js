import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/multicast';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
var PoolingService = (function () {
    function PoolingService(zone) {
        this.zone = zone;
    }
    // NOTE: Running the interval outside Angular ensures that e2e tests will not hang.
    PoolingService.prototype.execute = function (operation, frequency) {
        var _this = this;
        if (frequency === void 0) { frequency = 1000; }
        var subject = new Subject();
        var source = Observable.create(function (observer) {
            var sub;
            _this.zone.runOutsideAngular(function () {
                var zone = _this.zone;
                sub = Observable.interval(frequency).mergeMap(operation).subscribe({
                    next: function (result) {
                        zone.run(function () {
                            observer.next(result);
                        });
                    },
                    error: function (err) {
                        zone.run(function () {
                            observer.error(err);
                        });
                    }
                });
            });
            return function () {
                if (sub) {
                    sub.unsubscribe();
                }
            };
        });
        return source.multicast(subject).refCount().merge(operation());
    };
    PoolingService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PoolingService.ctorParameters = function () { return [
        { type: NgZone, },
    ]; };
    return PoolingService;
}());
export { PoolingService };
//# sourceMappingURL=poling.service.js.map