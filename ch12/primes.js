let prims = [];

onmessage = function(event){
    for(var i = 0; i < 200000; i++){
        if(isPrime(i)){
            prims.push(i);
        }
    }

    let primeList = "";
    for (var i=0; i<prims.length; i++) {
    primeList += prims[i];
    if (i != prims.length-1) primeList += ", ";
    }

    postMessage(primeList);

    //document.getElementById("primeCont").innerHTML = primeList;
}

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}