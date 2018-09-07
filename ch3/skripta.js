let el = document.getElementsByName("te");

el[0].oninput = function(input){
    if(input.length < 20){
        el[0].setCustomValidity("More detail");
    }
    else{
        el[0].setCustomValidity("");
    }
};

let btn = document.getElementById("klika");

btn.onclick = function(){
    document.getElementById("pedss").contentWindow.document.designMode = "on";
}