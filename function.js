
/**document.getElementById("boton").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}
*/

/**document.addEventListener("click", function () {
    console.log("hola mundo desde Eventlistener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"

})
*/

document.getElementById("boton").addEventListener("click", function () {
    console.log("hola mundo desde Eventlistener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"

})

document.getElementById("boton-color").addEventListener("click", function () {
    document.body.style.backgroundColor = "#FE0000";
})

document.getElementById("boton-default").addEventListener("click", function () {
    document.body.style.backgroundColor = "#ffffff";
})

document.getElementById("boton-ocultar").addEventListener("click", function () {
    document.getElementById("demo").style.display = "none";
})

const collection = document.getElementsByClassName("prueba");
for(let i= 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}