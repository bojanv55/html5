let btn = document.getElementById("save");

let database;

function randomstring(L) {
    var s = '';
    var randomchar = function() {
      var n = Math.floor(Math.random() * 62);
      if (n < 10) return n; //1-10
      if (n < 36) return String.fromCharCode(n + 55); //A-Z
      return String.fromCharCode(n + 61); //a-z
    }
    while (s.length < L) s += randomchar();
    return s;
  }

window.onload = function(){
    

  /*  let cnt = localStorage.getItem("gtmli");
    if(cnt != null){
        document.getElementById("content").innerHTML = cnt;
        localStorage.removeItem("gtmli");
        localStorage.clear();
    }*/

    let req = window.indexedDB.open("someDB", 1);

    req.onsuccess = function(e){
        database = req.result;

        let x = new Record(randomstring(5), randomstring(5));
        let tx = database.transaction(["someDB"], "readwrite");
        let os = tx.objectStore("someDB");
        let rqx = os.put(x);

        rqx.onerror = function(e){
            console.log(e);
        }

        rqx.onsuccess = function(e){
            console.log("Saved data");
        }
    };

    req.onerror = function(e){
        console.log(req.error);
    };

    req.onupgradeneeded = function(e){
        let db = req.result;
        let objs = db.createObjectStore("someDB", {keyPath: "a"});
    };

}

btn.onclick = function(){
    let htmlCont = document.getElementById("content").innerHTML;
    localStorage.setItem("gtmli", htmlCont);
    sessionStorage.setItem("gtmli", htmlCont);
}

window.onstorage = function(e){
    alert(e.key);
}

let f1 = document.getElementById("file1");

f1.onchange = function(files){
    let file = document.getElementById("file1").files[0];
    let reader = new FileReader();
    let f1o = document.getElementById("f1o");


    reader.onload = function(e) {
        f1o.innerHTML = reader.result;
      }

     reader.readAsText(file);

}

let fn = function(e){
    e.stopPropagation();
    e.preventDefault();
}

document.getElementById("dropbox").ondragenter = fn;
document.getElementById("dropbox").ondragover = fn;
document.getElementById("dropbox").ondrop = function(e){
    fn(e);
    let data = e.dataTransfer;
    let files = data.files;
    let file = files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("dropbox").style.backgroundImage = "url('" + e.target.result + "')";
      }

     reader.readAsDataURL(file);
}

function Record(a,b){
    this.a = a;
    this.b = b;
}

document.getElementById("datas").onclick = function(){
    let tx = database.transaction(["someDB"], "readonly");
    let os = tx.objectStore("someDB");
    let rq = os.openCursor();


    rq.onsuccess = function(e){
        let cursor = e.target.result;
        if(cursor){
            console.log(cursor.value);
            cursor.continue();
        }
    }
    
  /*  let tx2 = database.transaction(["someDB"], "readwrite");
    let os2 = tx2.objectStore("someDB");
    let rq2 = os2.delete(new Record("a","b"));*/
}