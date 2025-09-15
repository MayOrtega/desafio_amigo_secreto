let amigos = [];
function agregarAmigo(){
    const amigo = document.getElementById("amigo").value;
    if(amigo.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    if(amigos.includes(amigo)) {
        alert("El amigo ya está en la lista.");
        return;
    }   
    amigos.push(amigo);

    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });

    document.getElementById("amigo").value = "";
}

    function sortearAmigo(){
    if(amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer el sorteo.");
    

    } else {
        const asignaciones = {};
        const disponibles = [...amigos];

        amigos.forEach(amigo => {
            let index;
            do {
                index = Math.floor(Math.random() * disponibles.length);
            } while(disponibles[index] === amigo && disponibles.length > 1);
            asignaciones[amigo] = disponibles[index];
            disponibles.splice(index, 1);
        });

        let resultado = "Resultados del sorteo:\n";
        for(const [amigo, asignado] of Object.entries(asignaciones)) {
            resultado += `${amigo} le regala a ${asignado}\n`;
        }
    const listaResultado = document.getElementById("resultado");
    listaResultado.textContent = resultado;
    }
}