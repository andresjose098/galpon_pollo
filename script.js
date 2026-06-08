const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const phone = "573143183697"; 
const message = encodeURIComponent(
  "Hola, estoy interesado en comprar pollos. Quiero más información."
);

const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappFloat = document.getElementById("whatsappFloat");

whatsappBtn.href = `https://wa.me/${phone}?text=${message}`;
whatsappFloat.href = `https://wa.me/${phone}?text=${message}`;