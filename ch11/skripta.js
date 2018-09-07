document.getElementById("ftr").innerHTML = "" + isOnline();

let source = new EventSource("http://localhost:8080/sse");
source.onmessage = function(e){
    let cur = document.getElementById("display").innerHTML;
    cur += e.data;
    document.getElementById("display").innerHTML = cur;
}


let socket = new SockJS("http://localhost:8080/gs-guide-websocket");
let stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/greetings', function (greeting) {
        showGreeting(JSON.parse(greeting.body).content);
    });
    stompClient.send("/app/hello", {}, JSON.stringify({'name': "asd"}));
});

function showGreeting(message) {
    console.log("<tr><td>" + message + "</td></tr>");
}
