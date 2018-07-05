import { NgZone } from '@angular/core';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/multicast';
import { Observable } from 'rxjs/Observable';
export declare class PoolingService {
    private zone;
    constructor(zone: NgZone);
    execute<T>(operation: () => Observable<T>, frequency?: number): Observable<T>;
}
