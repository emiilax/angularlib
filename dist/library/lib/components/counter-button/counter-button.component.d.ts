import { OnInit, EventEmitter } from '@angular/core';
export declare class CounterButtonComponent implements OnInit {
    countChanged: EventEmitter<number>;
    clickCount: number;
    constructor();
    ngOnInit(): void;
    handleButtonClick(): void;
}
