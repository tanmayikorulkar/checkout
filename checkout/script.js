function showViewCart() {
    document.getElementById("view-cart").style.display = "block";
    document.getElementById("coupons").style.display = "none";
    document.getElementById("billing").style.display = "none";
}

function showCoupons() {
    document.getElementById("view-cart").style.display = "none";
    document.getElementById("coupons").style.display = "block";
    document.getElementById("billing").style.display = "none";
}

function showBilling() {
    document.getElementById("view-cart").style.display = "none";
    document.getElementById("coupons").style.display = "none";
    document.getElementById("billing").style.display = "block";
}

// Implement other functions for Add Items, Remove Items, etc.
