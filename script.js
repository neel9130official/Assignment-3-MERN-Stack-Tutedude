function greet(){
    let inputvalue=document.getElementById("myinput").value;
    document.getElementById("headertext").innerText="Hello, "+inputvalue;
}

document.getElementById("red").onclick = function() {
    this.style.backgroundColor = "red";
}
document.getElementById("blue").onclick = function() {
    this.style.backgroundColor = "blue";
}
document.getElementById("green").onclick = function() {
    this.style.backgroundColor = "green";
}
document.getElementById("yellow").onclick = function() {
    this.style.backgroundColor = "yellow";
}