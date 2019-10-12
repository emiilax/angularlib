(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/badge')) :
    typeof define === 'function' && define.amd ? define('library', ['exports', '@angular/core', '@angular/common', '@angular/material/button', '@angular/material/badge'], factory) :
    (global = global || self, factory(global.library = {}, global.ng.core, global.ng.common, global.ng.material.button, global.ng.material.badge));
}(this, function (exports, core, common, button, badge) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CounterButtonComponent = /** @class */ (function () {
        function CounterButtonComponent() {
            this.countChanged = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-counter-button',
                        template: "<button type=\"button\" id=\"lib-counter-button\" mat-raised-button color=\"primary\" [matBadge]=\"clickCount\"\n    matBadgeColor=\"accent\" [matBadgeHidden]=\"clickCount === 0\" (click)=\"handleButtonClick()\">Click Me!</button>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        CounterButtonComponent.ctorParameters = function () { return []; };
        CounterButtonComponent.propDecorators = {
            countChanged: [{ type: core.Output }]
        };
        return CounterButtonComponent;
    }());
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
    var LibraryModule = /** @class */ (function () {
        function LibraryModule() {
        }
        LibraryModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CounterButtonComponent],
                        imports: [common.CommonModule, button.MatButtonModule, badge.MatBadgeModule],
                        exports: [CounterButtonComponent]
                    },] }
        ];
        return LibraryModule;
    }());

    exports.CounterButtonComponent = CounterButtonComponent;
    exports.LibraryModule = LibraryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library.umd.js.map
