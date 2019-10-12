/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
var CounterButtonComponent = /** @class */ (function () {
    function CounterButtonComponent() {
        this.countChanged = new EventEmitter();
        this.clickCount = 0;
    }
    /**
     * @return {?}
     */
    CounterButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CounterButtonComponent.prototype.handleButtonClick = /**
     * @return {?}
     */
    function () {
        this.clickCount++;
        this.countChanged.emit(this.clickCount);
    };
    CounterButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-counter-button',
                    template: "<button type=\"button\" id=\"lib-counter-button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\"\n    matBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount === 0\" (click)=\"handleButtonClick()\">Click Me!</button>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CounterButtonComponent.ctorParameters = function () { return []; };
    CounterButtonComponent.propDecorators = {
        countChanged: [{ type: Output }]
    };
    return CounterButtonComponent;
}());
export { CounterButtonComponent };
if (false) {
    /** @type {?} */
    CounterButtonComponent.prototype.countChanged;
    /** @type {?} */
    CounterButtonComponent.prototype.clickCount;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvdW50ZXItYnV0dG9uL2NvdW50ZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFO0lBU0U7UUFIVSxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xFLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFFQyxDQUFDOzs7O0lBRWpCLHlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxrREFBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixrUEFBOEM7O2lCQUUvQzs7Ozs7K0JBRUUsTUFBTTs7SUFZVCw2QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksc0JBQXNCOzs7SUFDakMsOENBQWtFOztJQUNsRSw0Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY291bnRlci1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRlci1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb3VudGVyLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ291bnRlckJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSBjb3VudENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjbGlja0NvdW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgdGhpcy5jb3VudENoYW5nZWQuZW1pdCh0aGlzLmNsaWNrQ291bnQpO1xuICB9XG59XG4iXX0=