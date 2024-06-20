let cart = localStorage.getItem("cart-products");

cart = JSON.parse(cart);

const cartContainer = document.querySelector("#cart-container")
const cartActions = document.querySelector("#cart-actions")
const emptyButton = document.querySelector("#cart-actions-empty")
const priceTotal = document.querySelector("#total")

function deployCart() {

    

    cartContainer.innerHTML = "";

cart.forEach(product => {

    const div = document.createElement("div");
    div.classList.add("cart-product");
    div.innerHTML = 
    `
    <img class="cart-image" src="${product.image}" alt="${product.name}">
    <div class="cart-product-title">
    <small>Nombre</small>
    <h3>${product.name}</h3>
    </div>
    <div class="cart-product-amount">
    <small>Cantidad</small>
    <p>${product.cantidad}</p>
    </div>
    <div class="cart-product-price">
    <small>Precio</small>
    <p>$${product.price}</p>
    </div>
    <div class="cart-product-subt">
    <small>Subtotal</small>
    <p>$${product.price * product.cantidad}</p>
    </div>

    <button id="${product.id}" class="cart-product-delete">✖</button>

    `;

    cartContainer.append(div);

    activateDeleteButtons();
    getTotalPrice();

});

};

deployCart();

function activateDeleteButtons() {
    deleteButtons = document.querySelectorAll(".cart-product-delete");

    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteFromCart);
    })
}

function deleteFromCart(e) {
    let buttonId = e.currentTarget.id;
    const targetProduct = cart.findIndex(product => product.id === buttonId);

    cart.splice(targetProduct, 1);
    deployCart();

    localStorage.setItem("cart-products", JSON.stringify(cart));

    Toastify({
        text: "Producto eliminado",
        duration: 4000,
        destination: "#",
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

}

emptyButton.addEventListener("click", emptyCart)

function emptyCart(){


    cart.length = 0;
    localStorage.setItem("cart-products", JSON.stringify(cart))
    deployCart();

}

function getTotalPrice() {
    const getTotal = cart.reduce((acc, product) => acc + (product.price * product.cantidad), 0);
    priceTotal.innerText = `$${getTotal}`;
}







