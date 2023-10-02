const iAva = document.querySelector('#iAva');
// const iProva = document.querySelector('#iProva');
const mediaAva = document.querySelector('#mediaAva');
// const mediaProva = document.querySelector('#mediaProva');
// const iMedia = document.querySelector('#iMedia');
// const parcialFinal = document.querySelector('#parcialFinal');       
// const iStatus = document.querySelector('#iStatus');
// const valida = document.querySelector('#valida');
// const final = document.querySelector('#final');
// const media = Number(iAva.value * 0.4) + Number(iProva.value * 0.6);

// dados(iAva, iProva);
// mediaParcial(media);

// function dados(iAva, iProva) {
    if(iAva.value != '' && iAva.value <= 10){
        mediaAva.innerHTML = ' ==> Nota do AVA * 0.4 (40%) ==> ' + Number(iAva.value * 0.4);
        mediaAva.style.display = 'inline-block'
        
    }else{
        mediaAva.style.display = 'none'
    }

//     if (iProva.value != '' && iProva.value <= 10){
//         mediaProva.innerHTML = ' ==> Nota da Prova * 0.6 (60%) ==> ' + Number(iProva.value * 0.6);
//         mediaProva.style.display = 'inline-block'
//     }else{
//         mediaProva.style.display = 'none'
//     }
// }

// function mediaParcial(media){
//     if(media >= 5) {
//         parcialFinal.innerHTML = 'Final'
//         iStatus.innerHTML = 'Aprovado(a). Parabéns!'
//         valida.style.display = 'none'
//     }else{
//         valida.innerHTML = '<label for="iExame">Nota do Exame, caso já tenha: </label><input type="number" name="Exame" id="iExame" min="0" max="10">'
//         valida.style.display = 'block'
//         parcialFinal.innerHTML = 'Parcial'
//         iStatus.innerHTML = 'Exame. Boa sorte!'
//         final.style.display = 'none'
//     }
// }













// mediaParcial(mP);

// function mediaParcial(mP) {
//     if (mP >= 5.0){
//         alert(`Você tirou a nota ${mP} e foi aprovado na disciplina. Parabéns!`);
//     }else{
//         verificaExame();
//     }
// }

// function verificaExame() {
//     let resposta = String(prompt('Já tem a nota do exame? (S/N)')).toUpperCase();
//     if (resposta === 'S'){
//         let exame = parseFloat(prompt('Digite sua nota do Exame'));
//         mediaFinal(exame);
//     }else{
//         alert(`Sua média parcial é ${mP}. Aguarde o exame e Boa sorte!`);
//     }
// }

// function mediaFinal(exame) {
//     let mF = (mP + exame) / 2;
//     if (mF >= 5.0){
//         alert(`Você tirou a média final ${mF} e foi aprovado na disciplina. Parabéns!`);
//     }else{
//         alert(`Sua média final é ${mF}. Infelizmente, você ficou de DP pois não atingiu a média mínima de 5.`);
//     }
// }