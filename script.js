/* switch */

var producto = "naranjas";

switch (producto){
    case "papas":
        console.log('Las papas estan $45');
        break;
    case "naranjas":
        console.log('Las naranjas estan $90');
        break;
    case "duraznos":
        console.log('Los duraznos estan $45');
        break;
    default:
        console.log('No hay ese producto');     
};

/* while */

var contador = 0;

while (contador < 5){
    console.log(contador);
    contador ++;
};

/* do while */

var contador = 0;

do {
    console.log(contador);
    contador ++;
} while (contador < 5);

/* for */

for(let contar = 0; contar < 5; contar++){
    console.log(contar);
};