const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuBurgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCart = document.querySelector(".product-detail");

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