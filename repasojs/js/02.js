
//variables con const
// Se debe dar el valor de inicio y el valor nunca cambia
const aprendiendoConst = 'JavaScript';

// scope con const
// alcance que tienen las variables. Let 
const musicaConst = 'Rock';
if (musicaConst){
    const musicaConst = 'Grunge';
    console.log('dentro del if: ' + musicaConst);
}
console.log('fuera del if: ' + musicaConst);