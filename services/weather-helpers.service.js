import { Injectable } from '@angular/core';
var WeatherHelpersService = (function () {
    function WeatherHelpersService() {
    }
    WeatherHelpersService.prototype.groupForecastsByDay = function (list) {
        var map = {};
        var result = [];
        list.forEach(function (el) {
            var day = el.data.getUTCDate();
            if (!map[day]) {
                map[day] = [el];
            }
            else {
                map[day].push(el);
            }
        });
        result = Object.keys(map).map(function (key) { return map[key]; });
        return result;
    };
    // Fixme: This function generates wrong icon for average day weather.
    // Weather icon is taken from first day measurement
    WeatherHelpersService.prototype.reduceToAveragePerDay = function (list) {
        return list.reduce(function (prev, curr) {
            if (curr && !curr.data) {
                prev.push(curr);
                return prev;
            }
            var lastElement = function () {
                return prev[prev.length - 1];
            };
            var prevDay = lastElement()
                ? prev[prev.length - 1].data.getDay()
                : null;
            var currDay = curr.data.getDay();
            if (currDay === prevDay) {
                var result = lastElement();
                result.temp = (result.temp + curr.temp) / 2;
                if (result.wind && curr.wind) {
                    result.wind = {
                        speed: (result.wind.speed + curr.wind.speed) / 2,
                        deg: (result.wind.deg + curr.wind.deg) / 2
                    };
                }
                if (result.humidity && curr.humidity) {
                    result.humidity = (result.humidity + curr.humidity) / 2;
                }
                if (result.pressure && curr.pressure) {
                    result.pressure = (result.pressure + curr.pressure) / 2;
                }
                prev[prev.length - 1] = result;
                return prev;
            }
            else {
                prev.push(curr);
                return prev;
            }
        }, []);
    };
    WeatherHelpersService.prototype.mapForecastToCharts = function (forecast, borderColor) {
        if (borderColor === void 0) { borderColor = '#aaa'; }
        return forecast.reduce(function (prev, curr) {
            if (prev.labels) {
                prev.labels.push(curr.data.toISOString());
            }
            if (prev.datasets && prev.datasets[0] && prev.datasets[0].data) {
                var data = prev.datasets[0].data;
                data.push(curr.temp);
            }
            return prev;
        }, {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: ['rgba(0, 0, 0, 0.1)'],
                    borderColor: [borderColor],
                    borderWidth: 1
                }
            ]
        });
    };
    WeatherHelpersService.prototype.hexToRgbA = function (hex, opacity) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return "rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + "," + opacity + ")";
        }
    };
    WeatherHelpersService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WeatherHelpersService.ctorParameters = function () { return []; };
    return WeatherHelpersService;
}());
export { WeatherHelpersService };
//# sourceMappingURL=weather-helpers.service.js.map