function ejecutarAlgoritmo() {
    var inputTerminos = document.getElementById("cantidad-terminos");
    var contenedorResultado = document.getElementById("resultado-contenedor");
    
    var n = parseInt(inputTerminos.value);
    contenedorResultado.innerHTML = "";
    
    var a = 0;
    var b = 1;
    var c;
    
    for (var i = 1; i <= n; i++) {
        var numeroEvaluar = a;
        var esPrimo = (numeroEvaluar > 1); 
        
        for (var j = 2; j < numeroEvaluar; j++) {
            if (numeroEvaluar % j === 0) {
                esPrimo = false; 
                break; 
            }
        }
        
        var cardResultado = document.createElement("div");
        
        if (esPrimo) {
            cardResultado.className = "item-card primo-card";
            cardResultado.innerHTML = `
                <div class="item-index">TÉRMINO ${i}</div>
                <div class="item-value">${numeroEvaluar}</div>
                <span class="badge-primo">¡ES PRIMO!</span>
            `;
        } else {
            cardResultado.className = "item-card regular-card";
            cardResultado.innerHTML = `
                <div class="item-index">TÉRMINO ${i}</div>
                <div class="item-value">${numeroEvaluar}</div>
                <span class="badge-regular">Compuesto</span>
            `;
        }
        
        contenedorResultado.appendChild(cardResultado);
        
        c = a + b;
        a = b;
        b = c;
    }
}