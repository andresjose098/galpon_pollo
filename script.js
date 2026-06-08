// Menú responsive
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// WhatsApp pedido
const phone = '573001234567'; // Cambia por tu número real
const message = encodeURIComponent('Hola, quiero hacer un pedido de pollos desde tu web.');
const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappFloat = document.getElementById('whatsappFloat');

whatsappBtn.href = `https://wa.me/${phone}?text=${message}`;
whatsappFloat.href = `https://wa.me/${phone}?text=${message}`;