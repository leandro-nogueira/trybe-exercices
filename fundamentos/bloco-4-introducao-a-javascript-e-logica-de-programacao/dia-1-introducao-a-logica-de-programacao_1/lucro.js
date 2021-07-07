let custo = 35;
let venda = 70;
let custoTotal = (0.2 * custo) + custo;
let lucro = venda - custoTotal;
if(custo == 0){
    console.log('[ERROR] verifique os valores de CUSTO!');
    }else if(venda == 0){
        console.log('[ERROR] verifique os valores de VENDA!');
    }else{
     console.log((lucro * 1000).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }