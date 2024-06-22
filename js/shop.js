let cart = localStorage.getItem("cart-products");
cart = JSON.parse(cart) || [];

const cartContainer = document.querySelector("#cart-container");
const emptyButton = document.querySelector("#cart-actions-empty");
const priceTotal = document.querySelector("#total");

function deployCart() {
    if (cart.length >= 1) {
        cartContainer.innerHTML = "";

        cart.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = `
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
        });

        activateDeleteButtons();
        getTotalPrice();

    } else {
        cartContainer.innerHTML = "<h2>TU CARRITO ESTÁ VACIO</h2>";
    }
}

function activateDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".cart-product-delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteFromCart);
    });
}

function deleteFromCart(e) {
    const buttonId = e.currentTarget.id;
    const targetProductIndex = cart.findIndex(product => product.id === buttonId);
    cart.splice(targetProductIndex, 1);
    deployCart();
    localStorage.setItem("cart-products", JSON.stringify(cart));
    getTotalPrice();

    Toastify({
        text: "Producto eliminado",
        duration: 4000,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        offset: {
            x: 50,
            y: 100
        },
        style: {
            background: "linear-gradient(to bottom, #56426360, #0f1820)",
            borderRadius: "10px"
        },
    }).showToast();
}

emptyButton.addEventListener("click", emptyCart);

function emptyCart() {

    if (cart.length >= 1) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });

        swalWithBootstrapButtons.fire({
            title: "¿Estás seguro?",
            text: "¡Vas a eliminar todos los productos!",
            icon: "warning",
            iconHtml: '<i class="bi bi-exclamation-square" style="font-size: 4.5rem; color: #0f1820;"></i>',
            showCancelButton: true,
            confirmButtonText: "Sí, vaciar carrito",
            cancelButtonText: "Quiero mis productos",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "¡Carrito borrado!",
                    text: "Carrito eliminado",
                    icon: "success",
                    iconHtml: '<i class="bi bi-trash3-fill" style="font-size: 4.5rem; color: #0f1820;"></i>'
                });


                cart.length = 0;
                localStorage.setItem("cart-products", JSON.stringify(cart));
                deployCart();
                getTotalPrice();


            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "¡Carrito salvado!",
                    text: "Gracias por comprar en Nave",
                    icon: "error",
                    iconHtml: `<i class="bi bi-hand-thumbs-up" style="font-size: 4.5rem; color: #0f1820;"></i>`
                });
            }
        });
    } else {
        Swal.fire({
            icon: "error",
            iconHtml:`<i class="bi bi-bag"></i>`,
            title: "Tu carrito está vacío",
            text: "",
            footer: '<a href="./index.html">Vamos a llenarlo</a>'
            })
    }
}

function getTotalPrice() {
    const getTotal = cart.reduce((acc, product) => acc + (product.price * product.cantidad), 0);
    priceTotal.innerText = `$${getTotal}`;
}

deployCart();
