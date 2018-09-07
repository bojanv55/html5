navigator.geolocation.getCurrentPosition(
    function(pos){
        console.log("pos is " + pos.coords.latitude + ", " + pos.coords.longitude);

        console.log("Istorija je " + history.length);
    }
);


function receivedWorkerMessage(event){

    document.getElementById("primeCont").innerHTML = event.data;
}

/*
var worker = new Worker("primes.js");
worker.onmessage = receivedWorkerMessage;
worker.onerror = function(e){
    console.log("error " + e.message);
}

worker.postMessage({});
*/

//worker.terminate();

document.getElementById("i1").onclick = function(){
    history.pushState(null, null, "some.html");
}