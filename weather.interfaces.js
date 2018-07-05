var WeatherSettings = (function () {
    function WeatherSettings() {
        this.location = { cityName: 'Szczecin' };
        this.scale = TemperatureScale.CELCIUS;
        this.backgroundColor = 'white';
        this.color = 'black';
        this.layout = WeatherLayout.NARROW;
    }
    return WeatherSettings;
}());
export { WeatherSettings };
export var ForecastMode;
(function (ForecastMode) {
    ForecastMode[ForecastMode["GRID"] = 'GRID'] = "GRID";
    ForecastMode[ForecastMode["DETAILED"] = 'DETAILED'] = "DETAILED";
})(ForecastMode || (ForecastMode = {}));
export var TemperatureScale;
(function (TemperatureScale) {
    TemperatureScale[TemperatureScale["CELCIUS"] = 'celcius'] = "CELCIUS";
    TemperatureScale[TemperatureScale["KELVIN"] = 'kelvin'] = "KELVIN";
    TemperatureScale[TemperatureScale["FAHRENHEIT"] = 'fahrenheit'] = "FAHRENHEIT";
})(TemperatureScale || (TemperatureScale = {}));
export var WeatherLayout;
(function (WeatherLayout) {
    WeatherLayout[WeatherLayout["WIDE"] = 'wide'] = "WIDE";
    WeatherLayout[WeatherLayout["NARROW"] = 'narrow'] = "NARROW";
})(WeatherLayout || (WeatherLayout = {}));
//# sourceMappingURL=weather.interfaces.js.map