class Order{
    constructor(private price: number){}


}

let nodes = document.getElementsByName("qty");

for (let i = 0; i < nodes.length; i++) {
    let node : Node = nodes[i];
    if(node instanceof HTMLInputElement){
        node.valueAsNumber = 77;
        //console.log(node.valueAsNumber);
        let brojka = node.dataset.price;
        console.log(brojka);
    }
};
