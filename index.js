const ava = parseFloat(prompt('Digite sua nota do AVA (atividades avaliativas)'));
const prova = parseFloat(prompt('Digite sua nota da Prova Regular'));       
const mP = ava * 0.4 + prova * 0.6;

mediaParcial(mP);

function mediaParcial(mP) {
    if (mP >= 5.0){
        alert(`Você tirou a nota ${mP} e foi aprovado na disciplina. Parabéns!`);
    }else{
        verificaExame();
    }
}

function verificaExame() {
    let resposta = String(prompt('Já tem a nota do exame? (S/N)')).toUpperCase();
    if (resposta === 'S'){
        let exame = parseFloat(prompt('Digite sua nota do Exame'));
        mediaFinal(exame);
    }else{
        alert(`Sua média parcial é ${mP}. Aguarde o exame e Boa sorte!`);
    }
}

function mediaFinal(exame) {
    let mF = (mP + exame) / 2;
    if (mF >= 5.0){
        alert(`Você tirou a média final ${mF} e foi aprovado na disciplina. Parabéns!`);
    }else{
        alert(`Sua média final é ${mF}. Infelizmente, você ficou de DP pois não atingiu a média mínima de 5.`);
    }
}