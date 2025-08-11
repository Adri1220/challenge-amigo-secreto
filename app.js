// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value.trim();//trim elimina espacios al inicio o final
    //console.log("Nombre después de trim:", `"${nombre}"`); //aqui compruebo el trim

    //si el nombre está vacio
    if(nombre === ""){
        alert("Por favor, inserte un nombre.");
    }else if (amigos.includes(nombre)){ //si ese nombre ya estaba en la lista, elige otro
        alert('Ese nombre ya fue ingresado, ingrese otro')
    }else{ //sino, agrega ese nombre a la lista y luego limpia la caja de texto
        amigos.push(nombre);
        //console.log(amigos);
        document.getElementById('amigo').value = "";
        actualizarLista();
    }
}

function actualizarLista(){
    let lista = obtenerLista();//obtengo la lista declarada en html
    lista.innerHTML = "";//el inner cambia el contenido de la lista por vacío

    //creamos un bucle
    for (let i = 0; i < amigos.length; i++) {
       let li = document.createElement("li"); // Creamos un <li>
       li.textContent = amigos[i]; // Le ponemos el nombre del amigo
       lista.appendChild(li); // Lo agregamos a la lista en el HTML  
    }
}

function sortearAmigo(){
    if(amigos.length === 0){ //si no hay nombres en mi lista de amigos
        alert("No hay amigos para sortear. Digite nuevos nombres");
        return;
    }else{
        let aleatorio = Math.floor(Math.random() * amigos.length);//crea un numero aleatorio entre los de mi lista y lo guarda
        let amigoSorteado = amigos[aleatorio]; //guarda ese nombre para usarlo después o mostrarlo 
        document.getElementById("resultado").innerHTML = amigoSorteado; //Cambia el contenido de ese elemento por el nombre del amigo que fue sorteado.
        obtenerLista().innerHTML = "";
        amigos = [];
    }
}
// Esta función facilita el acceso al elemento de la lista en el HTML (ul con id "listaAmigos").
// En lugar de escribir document.getElementById("listaAmigos") varias veces, uso esta función
// para mantener el código más limpio, fácil de leer y evitar repetirlo a cada rato.
function obtenerLista() { 
    return document.getElementById("listaAmigos");
}
