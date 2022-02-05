const lista = ["js", "python", 1, true];
const body = document.querySelector("body");

function addBody(item){
    body.innerHTML += "<li>" + item + "</li>";
}
lista.forEach(addBody)