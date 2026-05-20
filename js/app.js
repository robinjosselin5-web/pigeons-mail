const btn_to_section = document.querySelectorAll('.btn-to-section');

btn_to_section.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(btn.dataset.target).scrollIntoView({ behavior: 'smooth' });
    });
});

/* Loading different parts */

function loadIncludes() {
    // On cherche tous les éléments qui ont l'attribut "data-include"
    const elements = document.querySelectorAll("[data-include]");
    
    elements.forEach(el => {
        const file = el.getAttribute("data-include");
        
        fetch(file)
            .then(res => res.ok ? res.text() : "Composant introuvable")
            .then(html => {
                el.innerHTML = html;
                // Optionnel : on retire l'attribut pour éviter de le recharger
                el.removeAttribute("data-include"); 
            });
    });
}

document.addEventListener("DOMContentLoaded", loadIncludes);


let order = null;
let isConfirmed = false;

if (isConfirmed === false) {
    while (order !== "thé" && order !== "café") {
    order = prompt("thé ou café ?");
    }

    order += confirm("sucre ?") ? "sucre" : "sans sucre";

    if (confirm("lait ?")) {
      if (confirm("végétal ?")) {
        order += ", lait végétal";
    } else {
        order += ", lait de vache";
    }
    }

    isConfirmed = confirm(`confirmer votre commande : ${order}`);
}

alert(`votre ${order} sera prêt dans une minute`);