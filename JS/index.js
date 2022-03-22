//const r = [document.querySelector('.roleta.value')];
const r =['<div class="txtOpInv"><h1>Ações</h1><h2>Seja sócio de empresas</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>','<div class="txtOpInv"><h1>Fll</h1><h2>Receva aluguéis de empreendimentos.</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>', '<div class="txtOpInv"><h1>ETF</h1><h2>Invista em várias ações.</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>', '<div class="txtOpInv"><h1>CDB</h1><h2>Empreste dinheiro para bancos.</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>', '<div class="txtOpInv"><h1>Fundos de Investimentos</h1><h2>Um especialista cuida para você.</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>', '<div class="txtOpInv"><h1>BDR</h1><h2>Invista em empresas do exterior.</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>', '<div class="txtOpInv"><h1>Tesouro Direto</h1><h2>Um especialista cuida para você.</h2></div><a href="#" class="txta">Saiba mais<img src="imagens/ArrowPurple.svg" alt=""></a>'];
const slot = [document.querySelector('#slot1'),document.querySelector('#slot2'),document.querySelector('#slot3'),document.querySelector('#slot4'),document.querySelector('#slot5'),document.querySelector('#slot6'),document.querySelector('#slot7')]
let controle = 0;
const opRoleta = document.getElementsByClassName("opRoleta");

function roleta(direcao){
    
    /*----OPÇÕES DA ROLETA---------*/
    
    if(direcao=='e'){
        controle--;
        if(controle<0){
            controle=6;
        }
    }else{
        controle++;
        if(controle>6){
            controle=0
        }
    }

    switch(controle){
        case 0:
            slot[0].innerHTML=r[0];   
            slot[1].innerHTML=r[1];   
            slot[2].innerHTML=r[2];   
            slot[3].innerHTML=r[3];   
            slot[4].innerHTML=r[4];   
            slot[5].innerHTML=r[5];   
            slot[6].innerHTML=r[6];
        break
        case 1:
            slot[0].innerHTML=r[1];   
            slot[1].innerHTML=r[2];   
            slot[2].innerHTML=r[3];   
            slot[3].innerHTML=r[4];   
            slot[4].innerHTML=r[5];   
            slot[5].innerHTML=r[6];   
            slot[6].innerHTML=r[0];
        break
        case 2:
            slot[0].innerHTML=r[2];   
            slot[1].innerHTML=r[3];   
            slot[2].innerHTML=r[4];   
            slot[3].innerHTML=r[5];   
            slot[4].innerHTML=r[6];   
            slot[5].innerHTML=r[0];   
            slot[6].innerHTML=r[1];
        break
        case 3:
            slot[0].innerHTML=r[3];   
            slot[1].innerHTML=r[4];   
            slot[2].innerHTML=r[5];   
            slot[3].innerHTML=r[6];   
            slot[4].innerHTML=r[0];   
            slot[5].innerHTML=r[1];   
            slot[6].innerHTML=r[2];
        break
        case 4:
            slot[0].innerHTML=r[4];   
            slot[1].innerHTML=r[5];   
            slot[2].innerHTML=r[6];   
            slot[3].innerHTML=r[0];   
            slot[4].innerHTML=r[1];   
            slot[5].innerHTML=r[2];   
            slot[6].innerHTML=r[3];
            break
        case 5:
            slot[0].innerHTML=r[5];   
            slot[1].innerHTML=r[6];   
            slot[2].innerHTML=r[0];   
            slot[3].innerHTML=r[1];   
            slot[4].innerHTML=r[2];   
            slot[5].innerHTML=r[3];   
            slot[6].innerHTML=r[4];
        break
        case 6:
            slot[0].innerHTML=r[6];   
            slot[1].innerHTML=r[0];   
            slot[2].innerHTML=r[1];   
            slot[3].innerHTML=r[2];   
            slot[4].innerHTML=r[3];   
            slot[5].innerHTML=r[4];   
            slot[6].innerHTML=r[5];
            break
    }    
    console.log(controle);
}