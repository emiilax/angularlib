import { EventEmitter, Component, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CounterButtonComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibraryModule {
}
LibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CounterButtonComponent],
                imports: [CommonModule, MatButtonModule, MatBadgeModule],
                exports: [CounterButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CounterButtonComponent, LibraryModule };
//# sourceMappingURL=library.js.map
