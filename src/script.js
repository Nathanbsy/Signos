const inpDia = document.getElementById("dia");
const inpMes = document.getElementById("mes");
const inpAno = document.getElementById("ano");
const resultadoDia = document.getElementById("resDia");
const resultadoMes = document.getElementById("resMes");
const resultadoAno = document.getElementById("resAno");
const resultadoSemana = document.getElementById("resSemana");
const seuSigno = document.getElementById("nomeSigno");
const divImagem = document.getElementById("bingo");
const imagemSigno = document.getElementById("imagensSignos");
const idadePessoa = document.getElementById("idade");
const containerImg = document.getElementsByTagName("main");
var corpo = document.getElementById('corpo');
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const dataHoje = new Date();
const anoBurro = dataHoje.getFullYear();


function calculaDiaSemana(diaCal, mesCal, anoCal) {
    const data = new Date(anoCal, mesCal - 1, diaCal);
    const diasDaSemana = ["um Domingo", "uma Segunda-feira", "uma Terça-feira", "uma Quarta-feira", "uma Quinta-feira", "uma Sexta-feira", "um Sábado"];
    console.log(diaCal, mesCal, anoCal);
    return diasDaSemana[data.getDate()];
}

function calculaMes(diaCal, mesCal, anoCal) {
    const data = new Date(anoCal, mesCal - 1, diaCal);
    console.log(diaCal, mesCal, anoCal);
    return meses[data.getMonth()];
}



function signar() {
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const ano = document.getElementById("ano").value;
    if (dia == "" || dia > 31) {
        alert("Não pode deixar o campo [DIA] vazio ou maior q 31");
        location.reload();
    } else if (mes == "" || mes > 12) {
        alert("Não pode deixar o campo [MES] vazio ou maior que 12");
        location.reload();
    } else if (ano == "" || ano > anoBurro) {
        alert(`Não pode deixar o campo [ANO] vazio ou maior que: ${anoBurro}`);
        location.reload();
    } else {
        const mesNasc = calculaMes(dia, mes, ano);
        const diaDaSemana = calculaDiaSemana(dia, mes, ano);
        console.log(`Você nasceu em: ${dia} de ${mesNasc} de ${ano}, que cai em uma ${diaDaSemana}`);


        if (mesNasc == meses[2] && dia >= 21 || mesNasc == meses[3] && dia <= 20) {
            //Aries
            imagemSigno.src = "https://cdn.ultrafarma.com.br/static/produtos/824024/medium-638260835524004826-824024.png";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Aries";
        } else if (mesNasc == meses[3] && dia >= 21 || mesNasc == meses[4] && dia <= 20) {
            //Touro
            imagemSigno.src = "https://www.comprerural.com/wp-content/uploads/2023/12/18-07-05_PAN-Lisboa-pede-fim-das-touradas-no-Campo-Pequeno.jpg";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Touro";
        } else if (mesNasc == meses[4] && dia >= 21 || mesNasc == meses[5] && dia <= 20) {
            //Gemeos
            imagemSigno.src = "https://super.abril.com.br/wp-content/uploads/2021/01/gemeos-identicos_site.jpg?quality=90&strip=info&w=1024&h=682&crop=1";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Gemêos";
        } else if (mesNasc == meses[5] && dia >= 21 || mesNasc == meses[6] && dia <= 22) {
            //Cancer
            imagemSigno.src = "https://conteudo.imguol.com.br/c/entretenimento/17/2024/04/15/celulas-cancerigenas-cancer-tumor-1713213233586_v2_450x450.jpg.webp";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Cancêr";
        } else if (mesNasc == meses[6] && dia >= 23 || mesNasc == meses[7] && dia <= 22) {
            //Leão
            imagemSigno.src = "https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/26/675x450/1_francesco_de_tommaso_zxnkxnr32ng_ubodynsplash-7844451.jpg?20220426113157?20220426113157"
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Leão";
        } else if (mesNasc == meses[7] && dia >= 23 || mesNasc == meses[8] && dia <= 22) {
            //Virgem
            imagemSigno.src = "https://emporio4estrelas.vtexassets.com/arquivos/ids/159902/azeite-gallo-extra-virgem-emp.png?v=637200673541930000";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Virgem";
        } else if (mesNasc == meses[8] && dia >= 23 || mesNasc == meses[9] && dia <= 22) {
            //Libra
            imagemSigno.src = "https://www.handtalk.me/br/wp-content/uploads/sites/8/2023/02/ALFABETO-LIBRAS-1024x594.png";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Libra";
        } else if (mesNasc == meses[9] && dia >= 23 || mesNasc == meses[10] && dia <= 21) {
            //Escorpiao
            imagemSigno.src = "https://www.bioqualitybrasil.com.br/wp-content/uploads/2018/03/brown-scorpion.jpg";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Escorpião";
        } else if (mesNasc == meses[10] && dia >= 22 || mesNasc == meses[11] && dia <= 21) {
            //Sagitario
            imagemSigno.src = "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e17c5c58f32abf4209a39728ba2792c918b11f9f-1920x1133.jpg";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Sagitário";
        } else if (mesNasc == meses[11] && dia >= 22 || mesNasc == meses[0] && dia <= 20) {
            //Capricornio
            imagemSigno.src = "https://cinefera.com.br/wp-content/uploads/2024/07/My-Deer-Friend-Nokotan-e-um-anime-com-uma-comedia-bizarra-mas-muito-boa-da-Crunchyroll-Wit-Studio-2.webp";
            divImagem.appendChild(imagemSigno);
            seuSigno.innerHTML = "Seu signo é Capricórnio";
        } else if (mesNasc == meses[0] && dia >= 21 || mesNasc == meses[1] && dia <= 18) {
            //Aquario
            imagemSigno.src = "https://img.odcdn.com.br/wp-content/uploads/2022/01/peixe-aquario.jpg";
            divImagem.appendChild(imagemSigno);
            
            seuSigno.innerHTML = "Seu signo é Aquário";
        } else if (mesNasc == meses[1] && dia >= 19 || mesNasc == meses[2] && dia <= 20) {
            //Peixes
            imagemSigno.src = "https://media.brainly.com.br/image/rs:fill/w:640/q:75/plain/https://pt-static.z-dn.net/files/da6/192a62bfb97a66e373dda02a763e8a03.jpg";
            seuSigno.innerHTML = "Seu signo é Peixes";
            divImagem.appendChild(imagemSigno);
        } else {
            alert("[Erro]");
        }

        const mensagem = `Você nasceu em: ${dia} de ${mesNasc} de ${ano}, que cai em ${diaDaSemana}`;

        resultadoSemana.innerHTML = mensagem;
        idadePessoa.innerHTML = anosDeIdade(dia, mes, ano);
    }

}


function anosDeIdade(diaCal, mesCal, anoCal) {
    const diaHoje = dataHoje.getDate();
    const mesHoje = dataHoje.getMonth() + 1;
    const anoHoje = dataHoje.getFullYear();
    console.log(`Data de aniversário ${diaCal}/${mesCal}/${anoCal}, Dia de hoje é: ${diaHoje}/${mesHoje}/${anoHoje}`);
    let velhice = anoHoje - anoCal;
    if (mesHoje < mesCal || mesHoje == mesCal && diaHoje < diaCal) velhice = velhice - 1;

    return velhice;
}

function limpar() {
    if (imagemSigno) {
        imagemSigno.remove();
    }
    inpDia.value = "";
    inpMes.value = "";
    inpAno.value = "";
    resultadoSemana.innerHTML = "";
    idadePessoa.innerHTML = "";
    seuSigno.innerHTML = "";
}