const escribirHtml = (html) => {
    //se leccionamos el div app que indicamos en el body de nuestra pagina
    let app = document.getElementById("app");
    //incrustar html en la pagina
    app.innerHTML = html;};

let values = [10, 20, 30, 20, 30, 40, 60];
let sum = values.reduce((previous, current) => current += previous);
let promedio = sum / values.length;

console.log(promedio);

const html = `<h3> El promedio es: ${promedio}/h3>`;
  escribirHtml(html);