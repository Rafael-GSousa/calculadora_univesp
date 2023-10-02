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
const btnFinal = document.querySelector('#btn-mFinal');
const mediaFinal = document.querySelector('#mediaFinal');
const situacaoFinal = document.querySelector('#situacaoFinal');
let md = 0;
let mdf = 0;

function mediaAvaProva(){
    if( '' != nAva.value >= 0 && '' != nProva.value >= 0 && nAva.value <= 10 && nProva.value <= 10){
        mAva.innerHTML = '==> <strong>Média AVA</strong> = ' + (Number(nAva.value * 0.4)).toFixed(2) + '<br> <em><strong>Obs.</strong>: Nota do AVA * 0.4 (40%)</em>';
        mProva.innerHTML = '==> <strong>Média Prova</strong> = ' + (Number(nProva.value * 0.6)).toFixed(2) + '<br> <em><strong>Obs.</strong>: Nota da Prova * 0.6 (60%)</em>';

        mAva.style.display = 'block';
        mProva.style.display = 'block';
    }else{
        alert('Nenhuma das notas deve ficar vazia nem com valores negativos!');
        mAva.style.display = 'none';
        mProva.style.display = 'none';
    }
}

function calcMedia(){
    md = Number(nAva.value * 0.4) + Number(nProva.value * 0.6);
    media.innerHTML = md;

    if(nAva.value != '' && nProva.value != ''){
        if(md >= 5.0){
            situacao.innerHTML = 'Essa é sua média final. Aprovado(a)!'
            container.style.display = 'block'
            container1.style.display = 'none';
            btnFinal.style.display = 'none';
        }else{
            situacao.innerHTML = 'Essa é sua média parcial. Exame!';
            container.style.display = 'block';
            container1.style.display = 'block';
            btnFinal.style.display = 'block';
        }
    }else{
        alert('Nenhuma das notas deve ficar vazia nem com valores negativos!');
        mAva.style.display = 'none';
        mProva.style.display = 'none';
        container.style.display = 'none';
    }
}

function calcMediaFinal(){
    mdf = (md + Number(nExame.value)) / 2;
    mediaFinal.innerHTML = mdf + '<br> <em><strong>Obs.</strong>: (Nota do Exame + Média Parcial) / 2</em>';

    if(mdf >= 5.0){
        situacaoFinal.innerHTML = 'Essa é sua média final. Aprovado(a)!'
        container2.style.display = 'block'
    }else{
        situacaoFinal.innerHTML = 'Essa é sua média final. Reprovado(a)!'
        container2.style.display = 'block'
    }
}