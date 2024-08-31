function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')        
        // Verifica qual rádio foi selecionado
        var genero = '';
        if (fsex[0].checked) {
            genero = 'Masculino';
            if(idade >=0 && idade <10){
                //Criançass
                img.setAttribute('src', 'png.manhã.png')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src', 'png.tarde.png')
            } else if ( idade < 50){
                //Adulto
                img.setAttribute('src', 'png.noite.png')
            }if (fsex[1].checked) {
            genero = 'Feminino';
            if(idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'png.noite.png')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src', 'png.manhã.png')
            } else if ( idade < 50){
                //Adulto
                img.setAttribute('src', 'png.tarde.png')
            }
            } 
         
        res.innerHTML = `Idade calculada: ${idade} anos<br>Gênero: ${genero}`;
        res.appendChild(img)
    }
}}
