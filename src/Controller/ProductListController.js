import Product from "../Model/Product";

const PRODUCTS = [
    new Product(1, 'Sporting Goods', '$49.99', 'Football'),
    new Product(2, 'Electronics', '$99.99', 'iPod Touch'),
    new Product(3, 'Electronics', '$399.99', 'iPhone 5'),
    new Product(4, 'Sporting Goods', '$9.99', 'Baseball'),
    new Product(5, 'Electronics', '$199.99', 'Nexus 7'),
    new Product(6, 'Sporting Goods', '$29.99', 'Basketball')
];

export default function ProductListController() {
    var instance;
    function init() {
        var list = PRODUCTS;
        var count = PRODUCTS.length;
        return {
            getList: function () {
                return list;
            },

            getCount: function () {
                return ++count+1;
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) instance = init();
            return instance;
        }
    }
};