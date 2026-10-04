const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const birthdayContent = document.getElementById("birthdayContent");
const confetti = document.getElementById("confetti");


let musicPlaying = false;


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicBtn.innerHTML = "🎵 Putar Musik";

        musicPlaying = false;

    } else {

        music.play().then(() => {

            musicBtn.innerHTML = "⏸️ Pause Musik";

            musicPlaying = true;

        }).catch(() => {

            alert("Musik belum bisa diputar. Silakan klik tombol lagi.");

        });

    }

}


/* =========================
   START BIRTHDAY
========================= */

function startBirthday() {

    birthdayContent.style.display = "block";

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });


    if (!musicPlaying) {

        music.play().then(() => {

            musicBtn.innerHTML = "⏸️ Pause Musik";

            musicPlaying = true;

        }).catch(() => {

            musicBtn.innerHTML = "🎵 Putar Musik";

        });

    }


    createConfetti();

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["💗", "💕", "💖", "💞", "💓"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.querySelector(".hearts").appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 800);


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        const size =
            6 + Math.random() * 8;

        piece.style.width = size + "px";

        piece.style.height =
            (size * 1.5) + "px";

        piece.style.background =
            getRandomColor();

        confetti.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 5000);

    }

}


/* =========================
   CONFETTI COLORS
========================= */

function getRandomColor() {

    const colors = [
        "#ff8fbd",
        "#ffb6d5",
        "#d9578b",
        "#e9a6ff",
        "#ffd166",
        "#ffffff"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}
