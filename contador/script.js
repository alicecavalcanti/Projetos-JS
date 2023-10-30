function Contar(){
    
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passos= document.getElementById('passos');
    var resultado = document.getElementById('resultado');
    //resultado.innerHTML = `Contando: `;
    res= document.createAttribute('p')
    var acumulador = inicio.value;
    while(inicio.value <= fim.value){
        resultado.innerHTML = acumulador.value
        //res.appendChild(inicio.value);
        acumulador += passos.value;

    }
}