var video1 = document.getElementById("myVideo1");

// Funkce pro přehrávání videa 1 s nastavením času na 10 sekund
function playVideo1() {
    video1.currentTime = 10;
    video1.play();
}

// Funkce pro restartování videa 1 s nastavením času na 10 sekund
function restartVideo1() {
    video1.currentTime = 10;
    video1.play();
}

// Přehrát video 1 při načítání metadat
video1.addEventListener('loadedmetadata', function() {
    playVideo1();
});

// Kontrola času při přehrávání videa 1 a restart, pokud dosáhne 55 sekund
video1.addEventListener('timeupdate', function() {
    if (video1.currentTime >= 55) {
        video1.pause();
        restartVideo1();
    }
});

// Restartovat video 1 po skončení s krátkým zpožděním
video1.addEventListener('ended', function() {
    setTimeout(restartVideo1, 1000);
});

// Pauza videa 1 při odchodu myši mimo video nebo nadpis
video1.addEventListener('mouseout', function(e) {
    if (!e.toElement || (e.toElement.tagName !== 'VIDEO' && e.toElement.tagName !== 'H1')) {
        video1.pause();
    }
});

// Přehrát video 1 při najetí myši na video nebo nadpis
video1.addEventListener('mouseover', function(e) {
    if (!e.fromElement || (e.fromElement.tagName !== 'VIDEO' && e.fromElement.tagName !== 'H1')) {
        video1.play();
    }
});

// Opakování pro video 2 s odpovídajícími komentáři
var video2 = document.getElementById("myVideo2");

function playVideo2() {
    video2.currentTime = 8;
    video2.play();
}

function restartVideo2() {
    video2.currentTime = 8;
    video2.play();
}

video2.addEventListener('loadedmetadata', function() {
    playVideo2();
});

video2.addEventListener('timeupdate', function() {
    if (video2.currentTime >= 17) {
        video2.pause();
        restartVideo2();
    }
});

video2.addEventListener('ended', function() {
    setTimeout(restartVideo2, 1000);
});

video2.addEventListener('mouseout', function(e) {
    if (!e.toElement || (e.toElement.tagName !== 'VIDEO' && e.toElement.tagName !== 'H1')) {
        video2.pause();
    }
});

video2.addEventListener('mouseover', function(e) {
    if (!e.fromElement || (e.fromElement.tagName !== 'VIDEO' && e.fromElement.tagName !== 'H1')) {
        video2.play();
    }
});



// Přidám logiku pro zobrazení textu při scrollnutí
document.addEventListener("DOMContentLoaded", function() {
    var carList = document.getElementById("carList");

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        // Přidáme třídu "visible" při scrollnutí
        if (scrollPosition > 100) {
            carList.classList.add("visible");
        } else {
            carList.classList.remove("visible");
        }
    });
});

function toggleText(carId) {
    var carText = document.getElementById(carId);
    carText.classList.toggle("collapsed");
    console.log("Toggle text for element with ID:", carId);
}

document.addEventListener("DOMContentLoaded", function() {
// Přidám event listenery pro všechna tlačítka
var buttons = document.querySelectorAll('.car-button');
buttons.forEach(function(button) {
button.addEventListener('click', function() {
    var carTextId = this.dataset.target;
    toggleText(carTextId);
});
});
});

// Funkce pro získání jména, příjmení a věku a přesměrování
function zkontrolujUdaje() {
    // Získání hodnot z promptu
    var jmeno = prompt("Zadejte své jméno:");
    var prijmeni = prompt("Zadejte své příjmení:");
    var vek = prompt("Zadejte svůj věk:");

    // Kontrola věku
    if (vek < 15) {
        alert("Omlouváme se, ale musíte být starší než 15 let pro přístup na tuto stránku.");
        // Přesměrování na jinou stránku
        window.location.href = "https://www.jinastranka.com";
    } else {
        // Pokud jsou údaje v pořádku, vítáme uživatele a může se dostat na tuto stránku
        alert("Vítejte, " + jmeno + " " + prijmeni + "! Naše stránka vás vítá.");
    }
}

// Zavolání funkce při spuštění skriptu (jen pro ukázku)
zkontrolujUdaje();

