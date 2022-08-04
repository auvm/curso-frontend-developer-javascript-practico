const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector("#shoppingCart");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);

menuBurgerIcon.addEventListener("click", toggleMobileMenu);

shoppingCartIcon.addEventListener("click", toggleShoppingCart);

function toggleDesktopMenu(){
    let isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
    if(isShoppingCartOpen){
        shoppingCart.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    let isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
    if(isShoppingCartOpen){
        shoppingCart.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart(){
    let isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    let isDesktopMenuOpen = !desktopMenu.classList.add("inactive");
    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add("inactive");
    }
    
    shoppingCart.classList.toggle("inactive");
}



const productList = [{
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/38296/cycling-bicycle-riding-sport-38296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
{
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/1548771/pexels-photo-1548771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
},
];

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        // product image
        const productImage = document.createElement("img");
        productImage.setAttribute("src", product.image);
    
        // product info
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        
        // price and name div
        const productInfoDiv = document.createElement("div");
            
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        // shopping cart icon
        const productFigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productFigure.appendChild(productImgCart);
    
    
        // add final result to main divs
        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(productImage, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
renderProducts(productList);
renderProducts(productList);