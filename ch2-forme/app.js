var Order = /** @class */ (function () {
    function Order(price) {
        this.price = price;
    }
    return Order;
}());
var nodes = document.getElementsByName("qty");
for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node instanceof HTMLInputElement) {
        node.valueAsNumber = 77;
        //console.log(node.valueAsNumber);
        var brojka = node.dataset.price;
        console.log(brojka);
    }
}
;
