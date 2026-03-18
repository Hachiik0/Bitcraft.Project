// Inisialisasi Typed.js (untuk Home)
if (document.querySelector(".text")) {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Quality Assurance"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

// LOGIK MODAL ZOOM SERTIFIKAT
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("fullImg");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close-modal");

// Cek apakah elemen modal ada di halaman ini
if (modal) {
    document.querySelectorAll('.view-cert').forEach(button => {
        button.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
            
            // Mencari gambar di dalam card yang sama dengan tombol
            const card = this.closest('.cert-card');
            const img = card.querySelector('img');
            const title = card.querySelector('h4');
            
            modalImg.src = img.src;
            captionText.innerHTML = title.innerText;
        }
    });

    // Klik tombol X untuk tutup
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Klik di luar gambar (area hitam) untuk tutup
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}