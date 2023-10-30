function verificarIdade(){
    
    var anoNascimento = document.getElementById('ano');
    var sexo = document.getElementsByName('inputSexo');
    var mensagemUsuario = document.getElementById ('resposta');
    const anoAtual = (new Date()).getFullYear();
    var idade = anoAtual - anoNascimento.value;
    var img = document.getElementsByTagName('img');
    
    if(anoNascimento.value > anoAtual || anoNascimento.value == 0){
        window.alert('Idade inválida, verifique os dados e tente novamente');
    }else{
        
        var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');
            //criança
            if(sexo[0].checked){ 
                
                if(idade > 0 && idade <= 7){
                    mensagemUsuario.innerHTML = `Detectamos um menino de ${idade} anos<br><br>`;
                    imagem.setAttribute('src', './imagens/menino_crianca.jpg');
                }
                else if(idade <= 16 ){
                    mensagemUsuario.innerHTML = `Detectamos um menino de ${idade} anos<br><br>`;
                    imagem.setAttribute ('src', './imagens/pre-adolescente-homem.jpg' )
                }
                else if(idade<=25 ){
                    mensagemUsuario.innerHTML = `Detectamos um homem de ${idade} anos<br><br>`;
                    imagem.setAttribute ('src', './imagens/homem_jovem.jpg' )
                }
                else if(idade <= 59){
                    mensagemUsuario.innerHTML = `Detectamos um adulto de ${idade} anos<br><br>`;
                    imagem.setAttribute('src', './imagens/homem_adulto.jpg')
                }
                else{
                    mensagemUsuario.innerHTML = `Detectamos um idoso de ${idade} anos<br><br>`;
                    imagem.setAttribute('src', './imagens/homem_idoso.jpg')
                }
                mensagemUsuario.style.textAlign = 'center'
                mensagemUsuario.appendChild(imagem); 
                
            }else if (sexo[1].checked){
                if(idade > 0 && idade <= 7){
                    mensagemUsuario.innerHTML = `Detectamos uma menina de ${idade} anos<br><br>`;
                    imagem.setAttribute('src', './imagens/menina_crianca.jpg');
                }
                else if(idade <= 16 ){
                    mensagemUsuario.innerHTML = `Detectamos uma menina de ${idade} anos<br><br>`;
                    imagem.setAttribute ('src', './imagens/pre-adolescente-mulher.jpg' )
                }
                else if(idade<=25 ){
                    mensagemUsuario.innerHTML = `Detectamos uma mulher de ${idade} anos<br><br>`;
                    imagem.setAttribute ('src', './imagens/mulher_jovem.jpg' )
                }
                else if(idade <= 59){
                    mensagemUsuario.innerHTML = `Detectamos uma adulta de ${idade} anos<br><br>`;
                    imagem.setAttribute('src', './imagens/mulher_adulta.jpg')
                }
                else{
                    mensagemUsuario.innerHTML = `Detectamos uma idosa de ${idade} anos<br><br>`;
                    imagem.setAttribute('src', './imagens/mulher_idosa.jpg')
                }
                mensagemUsuario.style.textAlign = 'center'
                mensagemUsuario.appendChild(imagem); 

            }else{
                alert('Selecione um gênero');
            }
            
            
    
    }

}
