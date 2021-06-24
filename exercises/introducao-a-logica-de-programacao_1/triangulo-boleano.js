let a = 45;
let b = 90;
let c = 45;
let triangulo;
if(a + b + c == 180){
    triangulo = true;
    console.log(triangulo);
}else{
    triangulo = false
    console.log(triangulo);
}if (triangulo == false){
    console.log('[ERROR] para formar um trinagulo a SOMA dos 3 angulos internos devem ser 180°')
}