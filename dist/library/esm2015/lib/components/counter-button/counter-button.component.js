/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
export class CounterButtonComponent {
    constructor() {
        this.countChanged = new EventEmitter();
        this.clickCount = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    handleButtonClick() {
        this.clickCount++;
        this.countChanged.emit(this.clickCount);
    }
}
CounterButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-counter-button',
                template: "<button type=\"button\" id=\"lib-counter-button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\"\n    matBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount === 0\" (click)=\"handleButtonClick()\">Click Me!</button>",
                styles: [""]
            }] }
];
/** @nocollapse */
CounterButtonComponent.ctorParameters = () => [];
CounterButtonComponent.propDecorators = {
    countChanged: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CounterButtonComponent.prototype.countChanged;
    /** @type {?} */
    CounterButtonComponent.prototype.clickCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvdW50ZXItYnV0dG9uL2NvdW50ZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3hFLE1BQU0sT0FBTyxzQkFBc0I7SUFJakM7UUFIVSxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFFQyxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGtQQUE4Qzs7YUFFL0M7Ozs7OzJCQUVFLE1BQU07Ozs7SUFBUCw4Q0FBa0U7O0lBQ2xFLDRDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb3VudGVyLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGVyLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdW50ZXItYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudGVyQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpIGNvdW50Q2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsaWNrQ291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICB0aGlzLmNvdW50Q2hhbmdlZC5lbWl0KHRoaXMuY2xpY2tDb3VudCk7XG4gIH1cbn1cbiJdfQ==