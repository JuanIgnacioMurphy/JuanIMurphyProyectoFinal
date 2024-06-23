let products = [];

fetch("./js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data
        deployProducts(products)
    })


    let reviews = [
        "Nave de Fibra es mi marca preferida! Aguante el POCHOCLO!",
        "Me compré una remera y a la semana me volvía comprar 3 más, impecable calidad.",
        "Aguante Nave de Fibra! Aguante el Oeste! Y AGUANTE EL POCHOCLO",
        "Muy buena calidad, recomiendo.",
        "Soy de Haedo y me encanta la marca... también el pochoclo",
        "Excelente atención y servicio. Me compré de todo, incluído el pochoclo",
        "Soy una persona con gustos raros y acá encontré todo lo que estaba buscando... ¡hasta el pochoclo!",
        "Me gusta mucho la marca y la verdad son re baratos. Pochoclo!",
        "Yo quería uñas acrílicas y terminé acá! Muy buena marca! Muy bueno el curso de uñas acrílicas!",
        "AGUANTE EL CURSO DE UÑAS ACRILICAS Y EL POCHOCLO VIEJO ME VUELVO LOCO!"
    ];

//// LLAMADOS AL DOM ////


let productContainer = document.getElementById("product-container");
const filterButtons = document.querySelectorAll(".filter-button")
const mainTitle = document.querySelector("#main-title")
let buyButtons = document.querySelectorAll(".product-buy-button")
const cartNumber = document.querySelector("#cart-number")
let userCardContainer = document.querySelector("#user-card-container")


//// FUNCIONES DE LA PÁGINA ////


function deployProducts(selectedProducts) {

    productContainer.innerHTML = "";

    selectedProducts.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("product")
        div.innerHTML =
            `
            <img class="product-image" src="${product.image}" alt="">

            <div class="product-info">

                <h3 class="product-title">${product.name}</h3>

                <p class="product-price">$${product.price}</p>

                <button class="product-buy-button" id="${product.id}">COMPRAR</button>

            </div>
        `

        productContainer.append(div);
    })

    deployBuyButtons();
}

filterButtons.forEach(button => {
    button.addEventListener("click", (x) => {

        if (x.currentTarget.id != "show-all") {


            const productsCategoryName = products.find(product => product.category.id === x.currentTarget.id)
            mainTitle.innerText = productsCategoryName.category.name.toUpperCase();

            const filteredProducts = products.filter(product => product.category.id === x.currentTarget.id)
            deployProducts(filteredProducts);

        } else {
            mainTitle.innerText = "Todos los productos";
            deployProducts(products);
        }

    })
})

function deployBuyButtons() {
    buyButtons = document.querySelectorAll(".product-buy-button")
    buyButtons.forEach(button => {
        button.addEventListener("click", addToCart)
    })
}

//// ARRAY DEL CARRITO ////

let cart;
let checkLocalStorage = localStorage.getItem("cart-products")

if (checkLocalStorage) {
    cart = JSON.parse(checkLocalStorage);
    updateCartNumber();
} else {
    cart = [];
}


//// AGREGAR PRODUCTOS AL CARRITO ////

function addToCart(e) {

    Toastify({
        text: "Producto agregado",
        duration: 4000,
        destination: "./cart.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        offset: {
            x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 100 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
            background: "linear-gradient(to bottom, #56426360, #0f1820)",
            borderRadius: "10px",

        },
        onClick: function () { } // Callback after click
    }).showToast();


    const idButton = e.currentTarget.id;
    const addedProduct = products.find(product => product.id === idButton);

    const productInCart = cart.find(product => product.id === idButton);

    if (productInCart) {
        productInCart.cantidad++;
    } else {
        cart.push(addedProduct);
    }

    updateCartNumber();

    localStorage.setItem("cart-products", JSON.stringify(cart));

}

//// NUMERITO DE CARRITO ////

function updateCartNumber() {
    let totalItems = cart.reduce((acc, product) => acc + product.cantidad, 0);
    cartNumber.textContent = totalItems;


}

function getRandomReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews.splice(randomIndex, 1)[0];
}


//// AGREGANDO API EN EL FOOTER ////

fetch(`https://randomuser.me/api/?results=3`)
    .then(response => response.json())
    .then(data => console.log(data))




    fetch(`https://randomuser.me/api/?results=3`)
    .then(response => response.json())
    .then(data => {
        let users = data.results;
        users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.classList.add("user-data");
            userCard.innerHTML =
                `
                        <img class="user-image" src="${user.picture.large}" alt="imagen de usuario>
                        <div class="user-data-text">
                            <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
                            <p class="user-review">${getRandomReview()}</p>
                        </div>
                `;
            userCardContainer.appendChild(userCard); 
        });
    });
