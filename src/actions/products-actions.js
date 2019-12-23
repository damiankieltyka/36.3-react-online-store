export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';
export const GET_CATEGORY = 'GET_CATEGORY';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const CHANGE_PRODUCT_PAGE = 'CHANGE_PRODUCT_PAGE';

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function sortProducts(sortingType) {
    return {
        type: SORT_PRODUCTS,
        sortingType
    }
}

export function getCategory(category) {
    return {
        type: GET_CATEGORY,
        category
    }
}

export function searchProducts(searchText) {
    return {
        type: SEARCH_PRODUCTS,
        searchText
    }
}

export function getProduct(id) {
    return {
        type: GET_PRODUCT,
        id
    }
}

export function changeProductPage(targetPage) {
    return {
        type: CHANGE_PRODUCT_PAGE,
        targetPage
    }
}
