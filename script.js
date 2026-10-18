document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    let text = `Halo, saya ${nama}. Email saya ${email}. ${pesan}`;

    let nomor = "6285766512669";

    window.location.href =
        "https://wa.me/" + nomor + "?text=" + encodeURIComponent(text);

});
