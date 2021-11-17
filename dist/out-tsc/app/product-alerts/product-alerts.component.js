import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ProductAlertsComponent = class ProductAlertsComponent {
    constructor() {
        this.notify = new EventEmitter();
    }
    ngOnInit() { }
};
__decorate([
    Output()
], ProductAlertsComponent.prototype, "notify", void 0);
__decorate([
    Input()
], ProductAlertsComponent.prototype, "product", void 0);
ProductAlertsComponent = __decorate([
    Component({
        selector: 'app-product-alerts',
        templateUrl: './product-alerts.component.html',
        styleUrls: ['./product-alerts.component.css'],
    })
], ProductAlertsComponent);
export { ProductAlertsComponent };
//# sourceMappingURL=product-alerts.component.js.map