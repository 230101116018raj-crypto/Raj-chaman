/* =========================
   SCROLL TO STORY
========================= */

function scrollToStory() {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();



/* =========================
   MUSIC PLAYER
========================= */

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;


musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "❚❚";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "♫";

        playing = false;

    }

});



/* =========================
   FLOATING PARTICLES
========================= */

const particleContainer =
    document.querySelector(".particles");


for (let i = 0; i < 70; i++) {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (Math.random() * 10 + 8) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);

}

/* =========================
   FINAL SURPRISE
========================= */

function openSurprise() {

    const popup = document.getElementById("surpriseOverlay");

    popup.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeSurprise() {

    const popup = document.getElementById("surpriseOverlay");

    popup.classList.remove("active");

    document.body.style.overflow = "auto";
}