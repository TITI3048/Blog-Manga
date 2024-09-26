var button = document.querySelector('.button');
        var menu = document.querySelector('.menu');

        button.onclick = function() {
            button.classList.toggle('active');
            menu.classList.toggle('active');
}

window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block"; // Affiche le bouton
    } else {
        button.style.display = "none"; // Cache le bouton
    }
};

// Faire défiler la page vers le haut
document.getElementById("scrollToTop").onclick = function() {
    document.body.scrollTop = 0; // Pour Chrome, Safari et Opera
    document.documentElement.scrollTop = 0; // Pour Internet Explorer et Firefox
};
