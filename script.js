function cekKodam() {
  let nama = document.getElementById("nama").value;

  if (nama === "") {
    alert("Masukkan nama dulu 👁️");
    return;
  }

  let kodam = [
    "Harimau Putih 🐯",
    "Naga Hitam 🐉",
    "Macan Gaib 🌑",
    "Elang Langit 🦅",
    "Serigala Malam 🐺",
    "Kucing Oren Sakti 😹",
    "Pocong Santuy 👻",
    "Buaya Darat Legendaris 🐊"
  ];

  let hasil = kodam[Math.floor(Math.random() * kodam.length)];

  document.getElementById("hasil").innerHTML =
    `🔮 Nama: <b>${nama}</b><br>Kodam kamu adalah:<br><b>${hasil}</b>`;
}
