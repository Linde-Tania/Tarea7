

const Oracion = "La playa es un hermoso lugar para relajarse";
const Mayus =  str => {

    let nuevo = str.split(" ");
    let resultado = [];
    nuevo.forEach(palabra => {
        let primerLetra = palabra.charAt(0).toUpperCase();
        let mediaPalabra = palabra.slice(1, palabra.length);
        resultado.push(primerLetra + mediaPalabra);
    });

    console.log(resultado.join(" "));

};
Mayus(Oracion);


function datos(){
    let contenedor = document.querySelector('#app');
    let html= `<ul> 
    <p>Inicial</p> 
    <li>Oracion: ${Mayus(Oracion)} </li>
    </ul>`;
console.log(html);
contenedor.innerHTML=html;

}
datos();
