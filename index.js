const nAva = document.querySelector('#nAva');
const nProva = document.querySelector('#nProva');
const nExame = document.querySelector('#nExame');
const mAva = document.querySelector('#mAva');
const mProva = document.querySelector('#mProva');
const container = document.querySelector('#container');
const media = document.querySelector('#media');
const situacao = document.querySelector('#situacao');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const mediaFinal = document.querySelector('#mediaFinal');
const situacaoFinal = document.querySelector('#situacaoFinal');
let md = 0;
let mdf = 0;

function mediaAva(){
    mAva.innerHTML = '==> Nota do Ava * 0.4 (40%) = ' + Number(nAva.value * 0.4);
}

function mediaProva(){
    mProva.innerHTML = '==> Nota da Prova * 0.6 (60%) = ' + Number(nProva.value * 0.6);
}

function calcMedia(){
    md = Number(nAva.value * 0.4) + Number(nProva.value * 0.6);
    media.innerHTML = md;

    if(md >= 5.0){
        situacao.innerHTML = 'Essa é sua média final. Aprovado(a)!'
        container.style.display = 'block'
        container1.style.display = 'none';
    }else{
        situacao.innerHTML = 'Essa é sua média parcial. Exame!';
        container.style.display = 'block';
        container1.style.display = 'block';
    }
}

function calcMediaFinal(){
    mdf = (md + Number(nExame.value)) / 2;
    mediaFinal.innerHTML = mdf;

    if(mdf >= 5.0){
        situacaoFinal.innerHTML = 'Essa é sua média final. Aprovado(a)!'
        container2.style.display = 'block'
    }else{
        situacaoFinal.innerHTML = 'Essa é sua média final. Reprovado(a)!'
        container2.style.display = 'block'
    }
}