
//// ARRAY DE PRODUCTOS ////

const products = [
    {
        id: "remera-01",
        name: "Remera Nave negra",
        image: "./assets/images/remeras/remera-nave-negra.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-02",
        name: "Remera Nave verde",
        image: "./assets/images/remeras/remera-nave-verde.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-03",
        name: "Remera Radiohead",
        image: "./assets/images/remeras/remera-radiohead.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-04",
        name: "Remera Quentin",
        image: "./assets/images/remeras/remera-quentin.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-05",
        name: "Remera Linkin Park",
        image: "./assets/images/remeras/remera-linkin-park.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-06",
        name: "Remera Rolling",
        image: "./assets/images/remeras/remera-rolling.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-07",
        name: "Remera Logo negra",
        image: "./assets/images/remeras/remera-logo-negra.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "remera-08",
        name: "Remera Logo verde",
        image: "./assets/images/remeras/remera-logo-verde.jpg",
        category: {
            name: "remeras",
            id: "remeras"
        },
        price: 5000,
        cantidad: 1
    },

    {
        id: "buzo-01",
        name: "Buzo Nirvana",
        image: "./assets/images/buzos/buzo-nirvana.jpg",
        category: {
            name: "buzos",
            id: "buzos"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "buzo-02",
        name: "Buzo Nave",
        image: "./assets/images/buzos/buzo-nave.jpg",
        category: {
            name: "buzos",
            id: "buzos"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "buzo-03",
        name: "Buzo Rolling",
        image: "./assets/images/buzos/buzo-rolling.jpg",
        category: {
            name: "buzos",
            id: "buzos"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "buzo-04",
        name: "Buzo Linkn Park",
        image: "./assets/images/buzos/buzo-linkin-park.jpg",
        category: {
            name: "buzos",
            id: "buzos"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "buzo-05",
        name: "Buzo ACDC",
        image: "./assets/images/buzos/buzo-acdc.jpg",
        category: {
            name: "buzos",
            id: "buzos"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-01",
        name: "Buzo ACDC Nave",
        image: "./assets/images/posters/poster-buzo-acdc.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-02",
        name: "Buzo Fight Club",
        image: "./assets/images/posters/poster-buzo-fight-club.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-03",
        name: "Buzo Jackie Brown",
        image: "./assets/images/posters/poster-buzo-jackie.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-04",
        name: "Buzo QOTS",
        image: "./assets/images/posters/poster-buzo-qotsa.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-05",
        name: "Buzo La Renga",
        image: "./assets/images/posters/poster-buzo-renga.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-06",
        name: "Buzo Rolling",
        image: "./assets/images/posters/poster-buzo-rolling.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    },

    {
        id: "poster-07",
        name: "Buzo Tarantino",
        image: "./assets/images/posters/poster-buzo-tarantino.jpg",
        category: {
            name: "poster",
            id: "poster"
        },
        price: 10000,
        cantidad: 1
    }
];

//// LLAMADOS AL DOM ////


const productContainer = document.getElementById("product-container");
const filterButtons = document.querySelectorAll(".filter-button")
const mainTitle = document.querySelector("#main-title")
let buyButtons = document.querySelectorAll(".product-buy-button")
const cartNumber = document.querySelector("#cart-number")



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

deployProducts(products);

filterButtons.forEach(button => {
    button.addEventListener("click", (x) => {

        if (x.currentTarget.id != "show-all"){


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
const checkLocalStorage = JSON.parse(localStorage.getItem("cart-products"))

if (checkLocalStorage){
    cart = checkLocalStorage;
    updateCartNumber();
} else {
    cart = [];
}


//// AGREGAR PRODUCTOS AL CARRITO ////

function addToCart(e) {
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




