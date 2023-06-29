/* Crie um objeto que tenha características de um caminhão e coloque em propriedades distintas; 
    Com destructuring coloque essas propriedades em variáveis separadas;
*/

let caminhao = {
    marca: "Volvo",
    modelo: "Globetrotter XL",
    motor:  "620cv",
    rodas:  18,
    diesel: true,
    opcionais: ["Ar condicionado", "Radio Px", "Freezer"],
    preco: "R$ 100.000.00"
};

let {marca, modelo, motor, rodas, diesel, opcionais, preco } = caminhao

console.log(`Caminhão da marca ${marca} modelo ${modelo}, com motor de ${motor}, e opcionais como por exemplo ${opcionais[0]} e ${opcionais[2]} por apenas ${preco}`)