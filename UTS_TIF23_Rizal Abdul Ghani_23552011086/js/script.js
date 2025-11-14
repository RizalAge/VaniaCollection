function initCarousel(selector, duplicateCount = 5) {
    const slide = document.querySelector(selector);

    if (!slide) return;  // Jika elemen tidak ditemukan, hentikan fungsi

    const items = slide.innerHTML;

    for (let i = 0; i < duplicateCount; i++) {
        slide.innerHTML += items;
    }
}

// Panggil untuk HIJAB
initCarousel(".hijab-carousel-slide");

// Panggil untuk BAJU
initCarousel(".baju-carousel-slide");

// Panggil untuk celana
initCarousel(".celana-carousel-slide");


//Form Reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tabelName = document.querySelector("#table_name").value;
    const tableSize = document.querySelector("#table_capacity").value;
    const date = document.querySelector("#order_date").value;
    const order = document.querySelector("#order").value;

    const orderText = `Hallo, saya ingin pesan untuk barang ${tableSize} orang, atas nama ${tabelName} 
    pada tanngal/waktu ${date} 
    
    Order:
    ${order || "*pesan ditempat"}`;

    window.location.replace(`https://wa.me/081573113650?text${orderText}`)
})

const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("open");
    mobileNavigation.classList.toggle("menu-active");
    
})

