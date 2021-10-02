
let array = [{
        category: "tienda",
        products: [{
                name: "coca",
                precio: 5
            },
            {
                name: "dorito",
                precio: 5
            }
        ]
    }, {
        category: "sala",
        products: [{
                name: "sillon",
                precio: 1000
            },
            {
                name: "television",
                precio: 5000
            }
        ]
    }, {
        category: "comedor",
        products: [{
                name: "silla",
                precio: 500
            },
            {
                name: "mesa",
                precio: 5500
            }
        ]
    },

]

function totalByCategory(inventory, category) {
    var info = inventory.filter(product => product.category == category)
    var cantidad
    if (info.length >= 1) {
        cantidad = info[0].products.reduce((previous, current) => {
            return previous.precio + current.precio
        })

        return "El precio total es: " + cantidad
    } else {
        return "No se encontro categoria el precio es: " + 0
    }
}
console.log(totalByCategory(array, "sala"))
function datos(){
    let contenedor = document.querySelector('#app');
    let html= `<ul> 
    <p>Inicial</p> <br>
    <li>Oracion:${totalByCategory(array,"sala")} </li>
    </br>
    </ul>`;
console.log(html);
contenedor.innerHTML=html;

}
datos();