function minhaFuncao(){

    var paragrafo = document.getElementsByTagName('p')[0];
    var conteudo = document.getElementsByClassName('corpo')[0];
    var img = document.getElementById ("imagem");
    var horario = new Date();
    const hora = horario.getHours();
    const minuto = horario.getMinutes();

    conteudo.style.backgroundRepeat= "no-repeat";
    conteudo.style.backgroundSize = "cover";

    if(hora >= 0 && hora <= 11){
        img.src = './imagens/img_manha.jpg';
        img.style.borderRadius = "200px";
        img.style.width = "290px"; 
        //chamando pela árvore dom, os elementos e mudando eles
        document.body.style.backgroundImage = "url('./imagens/fundo_manha.jpg')"
        

    }else if (hora >= 12 && hora <= 18){
        img.src = './imagens/img_tarde.jpg';
        img.style.borderRadius = "200px";
        img.style.width = "300px";
        img.style.height = "300px";
        conteudo.style.backgroundImage = "url('./imagens/fundo_tarde.jpg')"
        
    }else{
        img.src= './imagens/img_noite.jpg'
        img.style.borderRadius = "200px";
        img.style.width = "380px";
        img.style.height = "350px";
        conteudo.style.backgroundImage = "url('./imagens/fundo_noite.jpg')" 
        
    }
    
    paragrafo.innerHTML = `Agora são ${hora}:${minuto}`;

    
}