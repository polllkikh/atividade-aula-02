// o que são vatores ou arrays

// como declarar um array
let array = ['string',1, true];
// deve ser declarado entre colchetes "[]"
console.log(array);

// como um array pode guardar diferentes valores inclusive
//outros arrayas
// ex: let array = ['string',1, true, ['array1'],[array2']];

// como acessar o índice de um array
console.log(array[0]);

// manipulando um array
// forEach - realiza uma função para item do array
array.forEach(function(item, idex){console.log(item, idex);});

//push - add item no final da array
array.push('novo item');
console.log(array);

//pop -remove o último item do array
array.pop();
console.log(array)

//shift - remove o primeiro item do array
array.shift();
console.log(array)

//unshift - add item no ínicio fo array
array.unshift('novo item');
console.log(array);

//idexOf - retorna o índice de um ítem do array
console.log(array.indexOf(true));

//splice - remove ou substitui um item por índice
//array.splice(0, 2);
//console.log(array);

//slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 2)
console. log(novoArray);

console.log('-----------------------------------')
// o que são objeto
let object = {propriedade1: 'valor1' , propriedade2: 'valor2'};
// deve ser declarado entre chaves {}
console.log(object);

/*assim como arrays as propriedades de objetos também podem guardar quaisquer valores*/
let objetos2 = {
    string: 'string',
    number: 1,
    boolean: true,
    arrays: ['array'],
    ObjectInterno: {objetoInterno: 'objectoInterno'}};

    //como acessar propriedades de objetos
    //usando o ponto "."
    console.log(object2.objectInterno);

    //desestruturando objeto
    let string = object2.string;
    let number = objetos2.number;
    let boolean = objetos2.boolean; 