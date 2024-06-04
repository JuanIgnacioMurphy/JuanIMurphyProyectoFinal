const cart = JSON.parse(localStorage.getItem("cart-products"));

const cartContainer = document.querySelector("#cart-container")
const cartActions = document.querySelector("#cart-actions")

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
    console.log(buttonId)
}







