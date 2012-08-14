var vows = require('vows'),
    assert = require('assert');

vows.describe('Shopping Kata')
    .addBatch({
        'when I scan one A': {
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('A');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 50);
            }
        },
        'when I scan B':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('B');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 30);
            }
        },
        'when I scan C':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('C');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 20);
            }
        },
        'when I scan D':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('D');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 15);
            }
        },
        'when I scan A and A':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('A');
                shoppingCart.Scan('A');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 100);
            }
        },
        'when I scan A and A and A':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('A');
                shoppingCart.Scan('A');
                shoppingCart.Scan('A');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 130);
            }
        },
        'when I scan B and B':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('B');
                shoppingCart.Scan('B');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 45);
            }
        },
        'when I scan A and B':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('A');
                shoppingCart.Scan('B');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 80);
            }
        },
        'when I scan 6 Items':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('A');
                shoppingCart.Scan('B');
                shoppingCart.Scan('A');
                shoppingCart.Scan('B');
                shoppingCart.Scan('A');
                shoppingCart.Scan('B');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 205);
            }
        },
        'when I scan 4 of the same Items':{
            topic: function () { 
                var shoppingCart = new ShoppingCart();
                shoppingCart.Scan('B');
                shoppingCart.Scan('B');
                shoppingCart.Scan('B');
                shoppingCart.Scan('B');
                return shoppingCart;
            },
            'then price is ': function (topic) {
                assert.equal (topic.Total(), 90);
            }
        }
    })
    .run();

    var ShoppingCart = function (){ 
        var priceList = {
            'A': 50,
            'B': 30,
            'C': 20,
            'D': 15
        };
        var offers = {
            'A': {
                'count': 3,
                'price': 130,
                'discount': 20
            },
            'B': {
                'count': 2,
                'price': 45,
                'discount': 15
            }
        }
        var total = 0;
        var items = {};
        return {
            Scan: function(code){
                items[code] = (items[code] | 0) + 1;
                total += priceList[code];
                if (offers[code] && items[code] % offers[code].count == 0) {
                    total -= offers[code].discount;
                }
            },
            Total: function(){
                return total;
            }
        }
    };