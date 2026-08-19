
window.onload = function() { 

    var fichas = document.querySelectorAll(".ficha")  
    console.log(fichas.length)
    var boton = document.createElement("button");
    boton.textContent="Mostar Heroes";
    document.body.appendChild(boton);

    var Frase = document.createElement("button");
    Frase.textContent="Frase del dia";
    document.body.appendChild(Frase);
    var estado = true ; 



    boton.classList.add("boton-heroes");
    Frase.classList.add("boton-general");

    

    boton.addEventListener ("click",function(){

        for(var ficha of fichas){


        if (estado){
            if(ficha.getAttribute("data-tipo")=="villano"){
                ficha.style.display = "none"
            }else {
                ficha.style.display = "block";
                ficha.classList.add("resaltado");
            }
            boton.textContent = "Mostrar Villanos";
            boton.classList.remove("boton-heroes");
            boton.classList.add("boton-villano");
            
        }else {

            if(ficha.getAttribute("data-tipo")=="heroe"){
                ficha.style.display = "none"
            }else {
                ficha.style.display = "block";
                ficha.classList.add("resaltado-villano");
            }
            boton.textContent = "Mostar Heroes";
            boton.classList.remove("boton-villano");
            boton.classList.add("boton-heroes");


        }
        }
        estado = !estado; 

    })

    for(var ficha of fichas){
        ficha.addEventListener("mouseover",function(){
                this.style.backgroundColor="navy"});

        ficha.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#151A24";
        });
    }

    var imagenes = document.querySelectorAll(".ficha img")
    console.log(imagenes.length)

    for ( image of imagenes){
        image.classList.add("borde-rodondeado")
    }


function cargarFraseDelDia(callback) {
fetch("https://catfact.ninja/fact").then(function(respuesta) { return respuesta.json(); })
.then(function(datos) { callback(datos.fact); })
.catch(function(error) { console.log("No se pudo cargar la frase:", error); });
}

Frase.addEventListener("click",function(){

    cargarFraseDelDia(function(frase){
        var p = document.createElement("p")
        p.textContent = frase
        document.body.appendChild(p);
    })
})


function guardarFavorito (nombre) {

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(nombre){
                resolve(nombre + " guardado como favorito");
            } else {
            reject("No se pudo guardar: falta el nombre");
            }
            },1000);
        }
    );
}

for (ficha of fichas ){
    var favorito = document.createElement("button")
    favorito.textContent = "★ Favorito";
    favorito.classList.add("boton-general")
    ficha.appendChild(favorito);
    favorito.addEventListener("click",function(){
        var nombreEl = this.parentElement.querySelector(".nombre");
        guardarFavorito(nombreEl.textContent).then(function(mensaje) { console.log(mensaje); })
        .catch(function(error) { console.log(error); });

    })

}

}








