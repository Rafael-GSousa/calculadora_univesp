//Parte 1
const notaAva = document.querySelector('#notaAva'); // input da nota do AVA
const mediaAva = document.querySelector('#mediaAva'); // output da média do AVA
const notaProva = document.querySelector('#notaProva'); // input da nota do Prova
const mediaProva = document.querySelector('#mediaProva'); // output da média da Prova
const botaoCalc = document.querySelector('#botaoCalc'); // div do botão de cálculo da média parcial
const btnCalc = document.querySelector('#btnCalc'); // botão de cálculo da média parcial
const containerMediaParcial = document.querySelector('#containerMediaParcial'); // container da média e situação parcial
const mediaParcial = document.querySelector('#mediaParcial'); // saída da média parcial
const situacao = document.querySelector('#situacao'); // mensagem da situação parcial
//Parte 2
const parte2 = document.querySelector('#parte2');
const notaDoExame = document.querySelector('#notaDoExame'); // div do label e input da nota do exame
const notaExame = document.querySelector('#notaExame'); // input da nota do exame
const botaoFinal = document.querySelector('#botaoFinal'); // div do botão de cálculo da média final
const btnFinal = document.querySelector('#btnFinal'); // botão de cálculo da média final
const containerMediaFinal = document.querySelector('#containerMediaFinal'); // container da média e situação final
const mediaFinal = document.querySelector('#mediaFinal'); // saída da média final
const situacaoFinal = document.querySelector('#situacaoFinal'); // mensagem da situação final
const btnReset = document.querySelector('#reload');

let md = 0;
let mdf = 0;

btnCalc.addEventListener('click', mediaAvaProva);
btnFinal.addEventListener('click', calcMediaFinal);
btnReset.addEventListener('click', reset);

function reset() {
    location.reload();
}

function alerta() {
    alert('Preencher as notas conforme instrução abaixo\n- Valores de 0.0 a 10.0; \n- Nenhum dos campos pode ficar vazio; \n- Valores negativos não são permitidos.')
}

function mensagem(md, mdf) {
    if (md >= 5) {
        mediaParcial.innerHTML = 'Média Final ==> ' + md;
        situacao.innerHTML = '<strong>Situação:</strong> <span class="verde">Aprovado(a)!</span>';
        parte2.style.display = 'none';
    } else if (md < 5 && notaExame.value == '') {
        mediaParcial.innerHTML = 'Média Parcial ==> ' + md;
        situacao.innerHTML = '<strong>Situação:</strong> <span class="amarelo">Exame!</span>';
        parte2.style.display = 'block';
    } else if (mdf >= 5) {
        mediaFinal.innerHTML = 'Média Final ==> ' + mdf;
        situacaoFinal.innerHTML = '<strong>Situação:</strong> <span class="verde">Aprovado(a)!</span>';
    }else {
        mediaFinal.innerHTML = 'Média Final ==> ' + mdf;
        situacaoFinal.innerHTML = '<strong>Situação:</strong> <span class="vermelho">Reprovado(a)!</span>';
    }
}

function mediaAvaProva() {
    if (notaAva.value >= 0 && notaAva.value <= 10 && notaAva.value != '') {
        if (notaProva.value >= 0 && notaProva.value <= 10 && notaProva.value != '') {
            mediaAva.innerHTML = '<br>Média do AVA ==> ' + Number(notaAva.value * 0.4) + '<br><strong><em>Obs.:</strong> Nota do AVA * 0.4 (40%)</em>';
            mediaProva.innerHTML = '<br>Média da Prova ==> ' + Number(notaProva.value * 0.6) + '<br><strong><em>Obs.:</strong> Nota da Prova * 0.6 (60%)</em>';
            calcMedia();
        } else {
            alerta();
        }
    } else {
        alerta();
    }
}

function calcMedia() {
    md = Number(notaAva.value * 0.4) + Number(notaProva.value * 0.6);
    mensagem(md);
}

function calcMediaFinal() {
    mdf = (md + Number(notaExame.value)) / 2;
    mensagem(md, mdf);
}