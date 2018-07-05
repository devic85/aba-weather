import { OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Forecast } from '../../../services/api/weather.api.service';
import { WeatherHelpersService } from '../../../services/weather-helpers.service';
import { WeatherSettings } from '../../../weather.interfaces';
export declare class WeatherForecastDetailDayComponent implements OnChanges {
    private weatherHelpers;
    chartData: ChartData;
    chartOptions: ChartOptions;
    settings: WeatherSettings;
    forecast: Forecast[];
    private _forecast;
    constructor(weatherHelpers: WeatherHelpersService);
    ngOnChanges(change: SimpleChanges): void;
    private updateChartOptions();
}
