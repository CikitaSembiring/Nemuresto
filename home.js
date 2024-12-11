// Pilih elemen dengan kelas .card dan elemen teks yang akan dianimasikan
const cards = document.querySelectorAll('.card');

// Fungsi untuk memeriksa apakah elemen ada di viewport
function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
);
}

// Fungsi untuk menerapkan animasi jika elemen berada di viewport
function applyScrollAnimation() {
// Animasi untuk elemen card
cards.forEach((card, index) => {
    if (isInViewport(card)) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    } else {
        card.style.opacity = '0'; //elemen tidak berada dalam viewport
        card.style.transform = 'translateY(20px)';
    }
});
}

// Jalankan animasi saat scroll
window.addEventListener('scroll', applyScrollAnimation);

// Inisialisasi animasi saat halaman pertama kali dimuat
applyScrollAnimation();


// Panggil fungsi untuk menampilkan restoran saat halaman dimuat
// window.addEventListener('load', displayTrendingRestaurants);

function adjustCardTitles() {
const titles = document.querySelectorAll('.card h4');
let maxHeight = 0;

// Reset all heights to 'auto' to measure actual height
titles.forEach(title => {
    title.style.height = 'auto';
});

// Cari tinggi maksimal di antara semua judul
titles.forEach(title => {
    const titleHeight = title.offsetHeight;
    if (titleHeight > maxHeight) {
        maxHeight = titleHeight;
    }
});

// Terapkan tinggi maksimal ke semua judul
titles.forEach(title => {
    title.style.height = maxHeight + 'px';
});
}

// Menambahkan tooltip untuk judul panjang
function addTitleTooltip() {
const titles = document.querySelectorAll('.card h4 a');
titles.forEach(title => {
    if (title.scrollWidth > title.clientWidth) {
        title.setAttribute('title', title.textContent); // Set attribute title if text is truncated
    }
});
}

// Panggil fungsi saat halaman dimuat
window.addEventListener('load', () => {
adjustCardTitles();
addTitleTooltip();
});