const escribirHtml = (html) => {
    //se leccionamos el div app que indicamos en el body de nuestra pagina
    let app = document.getElementById("app");
    //incrustar html en la pagina
    app.innerHTML = html;
  };

var entrada1 = [2, 4, 6];
var entrada2 = [-3, 2, -8, 12, 5];
var entrada3 = [1, 2, 3, 4, 5];

var salida1 = entrada1.map(elevado => {

    return Math.pow(elevado, 2);
    
})

console.log(salida1);



var salida2 = entrada2.map(elevado => {

    if (elevado === 5) {
        return elevado
    } else if (elevado > 0) {
        return Math.pow(elevado, 2);

    } else if (elevado < 0) {
        return elevado;

    } else if (elevado === (-8)) {
        return Math.pow(elevado, 2);

    }
    
});

console.log(salida2)
 

var salida3 = entrada3.map(elevado => {

    if (elevado <= 4 && elevado != 3) {
        return Math.pow(elevado, 2);
    }
    return elevado;
});
console.log(salida3);
 
const html = `<h3> La Salida 1 es: ${salida1}<br>
                   La salida 2 es: ${salida2}<br>
                   La salida 3 es:<${salida3}/h3>`;
  escribirHtml(html);