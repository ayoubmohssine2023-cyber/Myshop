// تحميل السلة من التخزين المحلي
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// إضافة منتج إلى السلة
function addToCart(productName) {
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " تمت إضافته إلى السلة ✅");
}

// الانتقال إلى صفحة السلة
function goToCart() {
    window.location.href = "cart.html";
}

// زر "تسوق الآن" ينزل إلى المنتجات
function goToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}