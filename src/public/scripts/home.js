import * as common from "./common.js";


function enablePreloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {  // add a short delay for aesthetics
            preloader.classList.add('preloader-end');
        }, 300);
    });
}


function animatePreloader() {
    // TODO
    return
    //const preloaderLetters = document.querySelectorAll('.preloader-text span');
    //for (let i=0; i<preloaderLetters.length; i++) {
        //let preloaderLetter = preloaderLetters[i];
        //preloaderLetter.classList.toggle('preloader-letter-animate');
        //preloaderLetter.style.animationDelay = i*100 + 'ms';
        //console.log(preloaderLetter.style.animationDelay);
    //}
}


function enableSlideshow() {
    // adapted from [Dev Ed](https://www.youtube.com/watch?v=KcdBOoK3Pfw)
    const heroSlider = document.querySelector('.hero-slider');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const numImages = heroSlider.querySelectorAll('img').length;

    // slide one over to start
    heroSlider.style.transform = `translateX(${-heroSlider.clientWidth}px)`;

    let i = 1;  // represents current location in slideshow

    function nextSlide() {
        if (i >= numImages-1) return;  // handles clicking before transition end
        heroSlider.classList.add('hero-animate');  // slide animation
        let width = heroSlider.clientWidth;
        i++;
        heroSlider.style.transform = `translateX(${-width * i}px)`;
    }

    function prevSlide() {
        if (i <= 0) return;  // handles clicking before transition end
        heroSlider.classList.add('hero-animate');
        let width = heroSlider.clientWidth;
        i--;
        heroSlider.style.transform = `translateX(${-width * i}px)`;
    }

    // restart slideshow to create circular effect
    heroSlider.addEventListener('transitionend', () => {
        if (i === 0) {
            heroSlider.classList.add('no-animate');  // prevents jarring reset animation
            let width = heroSlider.clientWidth;
            i = numImages-2;
            heroSlider.style.transform = `translateX(${-width * i}px)`;
            heroSlider.offsetHeight;  // forces a recognition of new animation rules
            heroSlider.classList.remove('no-animate');
        }
        else if (i === numImages-1) {
            heroSlider.classList.add('no-animate');
            let width = heroSlider.clientWidth;
            i = 1;
            heroSlider.style.transform = `translateX(${-width * i}px)`;
            heroSlider.offsetHeight;
            heroSlider.classList.remove('no-animate');
        }
    });

    const repeatNextSlide = setInterval(nextSlide, 4500);  // auto-play

    // activate buttons
    nextBtn.onclick = () => { clearInterval(repeatNextSlide); nextSlide(); };
    prevBtn.onclick = () => { clearInterval(repeatNextSlide); prevSlide(); };
}


// actually do the stuff
enablePreloader();
common.disableLinksToCurrentPage('.home-link');
//animatePreloader();
enableSlideshow();
