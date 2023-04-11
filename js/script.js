// ------------ Text Reveal ------------
ScrollReveal().reveal('.working__name', {duration: 2000});

// ------------ Typed JS ------------
const typed = new Typed('.working__message', {
    strings: ["I'm working on it!", 'Soon it will be ready!', 'Thanks for waiting!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});