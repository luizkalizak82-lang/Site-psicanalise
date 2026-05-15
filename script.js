document.getElementById('whatsapp-button').addEventListener('click', function() {
    const phone = "5547999147077"; 
    const message = "Olá Cicera, gostaria de agendar uma consulta.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});
