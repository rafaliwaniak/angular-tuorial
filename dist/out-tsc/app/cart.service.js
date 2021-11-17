import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CartService = class CartService {
    constructor() {
        this.items = [];
    }
    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map