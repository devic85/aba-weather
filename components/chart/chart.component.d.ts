import { ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
export declare class ChartComponent implements OnInit, OnChanges {
    private elementRef;
    chart: any;
    type: 'line' | 'bar' | 'radar' | 'pie' | 'polarArea' | 'bubble' | 'scatter';
    data: ChartData;
    options: ChartOptions;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
