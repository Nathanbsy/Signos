const inpDia = document.getElementById("dia");
const inpMes = document.getElementById("mes");
const inpAno = document.getElementById("ano");
const resultadoDia  = document.getElementById("resDia");
const resultadoMes  = document.getElementById("resMes");
const resultadoAno  = document.getElementById("resAno");
const resultadoSemana  = document.getElementById("resSemana");
const seuSigno = document.getElementById("nomeSigno");
const divImagem = document.getElementById("containerImagem");
const imagemSigno = document.createElement("img");

function calculaDiaSemana(diaCal, mesCal, anoCal) {
    const data = new Date(anoCal, mesCal - 1, diaCal);
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    console.log(diaCal, mesCal, anoCal);

    return diasDaSemana[data.getDay()];
}

function signar() {
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const ano = document.getElementById("ano").value;
    
    const diaDaSemana = calculaDiaSemana(dia, mes, ano);
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const signos = ["Áries", "Touro", "Gêmeos", "Cancêr", "Leão", "Virgem", "Libra", "Escorpião", "Sargitário", "Capricórnio", "Aquário", "Peixes"];
    const mesNasc = meses[mes - 1];
    console.log(`Você nasceu em: ${dia} de ${mesNasc} de ${ano}, que cai em uma ${diaDaSemana}`);

    
    if (mesNasc == meses[2] && dia >= 21 || mesNasc == meses[3] && dia <= 20) {
        //Aries
        imagemSigno.src = "/src/assets/imagens/imagem-aquario.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Aries";
    } else if (mesNasc == meses[3] && dia >= 21 || mesNasc == meses[4] && dia <= 20) {
        //Touro
        imagemSigno.src = "/src/assets/imagens/imagem-touro.webp";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Touro";
    } else if (mesNasc == meses[4] && dia >= 21 || mesNasc == meses[5] && dia <= 20) {
        //Gemeos
        imagemSigno.src = "/src/assets/imagens/imagem-gemeos.webp";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Gemêos";
    } else if (mesNasc == meses[5] && dia >= 21 || mesNasc == meses[6] && dia <= 22) {
        //Cancer
        imagemSigno.src = "/src/assets/imagens/imagem-cancer.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Cancêr";
    } else if (mesNasc == meses[6] && dia >= 23 || mesNasc == meses[7] && dia <= 22) {
        //Leão
        imagemSigno.src = "git/assets/imagens/imagem-leao.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Leão";
    } else if (mesNasc == meses[7] && dia >= 23 || mesNasc == meses[8] && dia <= 22) {
        //Virgem
        imagemSigno.src = "/src/assets/imagens/imagem-virgem.png";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Virgem";
    } else if (mesNasc == meses[8] && dia >= 23 || mesNasc == meses[9] && dia <= 22) {
        //Libra
        imagemSigno.src = "/assets/imagens/imagem-libra.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Libra";
    } else if (mesNasc == meses[9] && dia >= 23 || mesNasc == meses[10] && dia <= 21) {
        //Escorpiao
        imagemSigno.src = "/assets/imagens/imagem-escorpiao.jpeg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Escorpião";
    } else if (mesNasc == meses[10] && dia >= 22 || mesNasc == meses[11] && dia <= 21) {
        //Sagitario
        imagemSigno.src = "/src/assets/imagens/imagem-sagitario.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Sagitário";
    } else if (mesNasc == meses[11] && dia >= 22 || mesNasc[0] && dia <= 20) {
        //Capricornio
        imagemSigno.src = "/src/assets/imagens/imagem-capricornio.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Capricórnio";
    } else if (mesNasc == meses[0] && dia >= 21 || mesNasc[1] && dia <= 18) {
        //Aquario
        imagemSigno.src = "/src/assets/imagens/imagem-aquario.jpg";
        imagemSigno.width = "50%";
        divImagem.appendChild(imagemSigno);
        seuSigno.innerHTML = "Seu signo é Aquário";
    } else if (mesNasc == meses[1] && dia >= 19 || mesNasc[2] && dia <= 20) {
        //Peixes
        imagemSigno.src = "/src/assets/imagens/imagem-peixes.webp";
        imagemSigno.width = "50%";
        seuSigno.innerHTML = "Seu signo é Peixes";
        divImagem.appendChild(imagemSigno);
    } else {
        alert("[Erro]");
    }
    
    const mensagem = `Você nasceu em: ${dia} de ${mesNasc} de ${ano}, que cai em uma ${diaDaSemana}`;
    
    resultadoSemana.innerHTML = mensagem;
    

}



function limpar() {
    if (imagemSigno) {
        imagemSigno.remove();
    }
    inpDia.value = "";
    inpMes.value = "";
    inpAno.value = "";
    resultadoSemana.innerHTML = "";
    
}