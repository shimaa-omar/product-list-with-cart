let menu = document.getElementById("menu")
let list = [
    {
        id: 1,
        img: "./images/image-waffle-desktop.jpg",
        name: "Waffle",
        dis: "Waffle with Berries",
        price: "$6.50"
    },
    {
        id: 2,
        img: "./images/image-creme-brulee-desktop.jpg",
        name: "Crème Brûlée",
        dis: "Vanilla Bean Crème Brûlée",
        price: "$7.00"
    },
    {
        id: 3,
        img: "./images/image-macaron-desktop.jpg",
        name: "Macaron",
        dis: "Macaron Mix of Five",
        price: "$8.00"
    },
    {
        id: 4,
        img: "./images/image-tiramisu-desktop.jpg",
        name: "Tiramisu",
        dis: "Classic Tiramisu",
        price: "$5.50"
    },
    {
        id: 5,
        img: "./images/image-baklava-desktop.jpg",
        name: "Baklava",
        dis: "Pistachio Baklava",
        price: "$4.00"
    },
    {
        id: 6,
        img: "./images/image-meringue-desktop.jpg",
        name: "Pie",
        dis: "Lemon Meringue Pie",
        price: "$5.00"
    }
]
function drewItem1(item){
    return `<div class="product">
                <div class="image">
                    <img src="${item.img}" alt="">
                    <button onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping add"></i>Add to cart</button>
                </div>
                <div class="cart-dis">
                    <p class="name">${item.name}</p>
                    <p class="dis">${item.dis}</p>
                    <p class="price">${item.price}</p>
                </div>
            </div>`;
}

function add(){
    let products = list.map(drewItem1);
    menu.innerHTML = products.join("")
}
add();
// //////////////////////////////////////
let yourCart =document.getElementById("your-cart");
let cart =[]
let count = document.getElementById("count")
function addToCart(id){
    let product = list.find(function(item){
        return item.id == id
    });
    cart.push(product)
    add2()
}
function add2(){
    let products = cart.map(drewItem2);
    yourCart.innerHTML = products.join("")
    count.innerHTML = cart.length
}
function drewItem2(item){
    return `<div class="your-cart-product">
                <p class="name">${item.name}</p>
                <p class="price">${item.price}</p>
                <button onclick=remove(${item.id})>x</button>
            </div>`;
}

// /////////////////////4
function remove(id){
    let index=cart.findIndex(function(item){
        return item.id === id;
    })
    console.log(index)
    cart.splice(index,1)
    add2()
}
