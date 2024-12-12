let products = []
let cart = []

// рендер карточки товара
function renderProduct() {
    const productList = document.getElementById('product-list')
    productList.innerHTML = '' 

    products.forEach((product, index)=> {
        const productCard = document.createElement('div')
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цена: ${product.price} рублей</p>
            <button onclick="addToCart(${index})">Добавить в корзину</button>
        `
        productList.appendChild(productCard)
    })
}

const cartList = document.getElementById('cart-list')
if (cart.length == 0) {
    cartList.innerHTML = `<p>Корзина пуста</p>`
}

// рендер корзины
function renderCart() {
    cartList.innerHTML = '' 
    cart.forEach((product, index)=> {
        const productCard = document.createElement('div')
        
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цена: ${product.price} рублей</p>
            <button onclick="removeFromCart(${index})">Удалить</button>
        `
        cartList.appendChild(productCard)
    })

}

// добавения товара
function addProduct(name, price) {
    products.push(
        {
         name, 
         price
        }
    );
    renderProduct()
}

// кнопка добавления
document.getElementById('addCardBtn').addEventListener('click', () => {
    const productName = document.getElementById("productName").value
    const productPrice = document.getElementById("productPrice").value
    
    if (productName && productPrice) { 
        addProduct(productName, productPrice)
    }

    else {
        alert("Заполните поля!")
    }
})

// добавление в корзину
function addToCart(productIndex) {
    cart.push(products[productIndex]);
    renderCart()
}

// удаление из корзины
function removeFromCart(productIndex) {
    cart.splice(productIndex)
    renderCart()
}