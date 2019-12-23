export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const USE_COUPON = 'USE_COUPON';
export const TO_CHECKOUT = 'TO_CHECKOUT';
export const ON_CHECKOUT = 'ON_CHECKOUT';


export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function changeQuantity(id, quantity) {
    return {
        type: CHANGE_QUANTITY,
        id,
        quantity
    }
}

export function useCoupon(couponCode) {
    return {
        type: USE_COUPON,
        couponCode
    }
}

export function toCheckout(subtotal) {
    return {
        type: TO_CHECKOUT,
        subtotal
    }
}

export function onCheckout() {
    return {
        type: ON_CHECKOUT
    }
}
