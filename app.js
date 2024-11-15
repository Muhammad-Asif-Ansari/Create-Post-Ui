
function createName(){
    var postInput1 = document.getElementById("postInput1");
    var random1  = document.getElementById("random1");
    var postInput3 = document.getElementById("postInput3");
    var random3 = document.getElementById("random3");
    var postInput2 = document.getElementById("postInput2");
    var random2  = document.getElementById("random2");

    random1.innerHTML += postInput1.value + "<br>";
    postInput1.value = "" 
    random2.innerHTML += postInput2.value + "<br>";
    postInput2.value = ""
    random3.innerHTML += postInput3.value + "<br>"; 
    postInput3.value = ""
}