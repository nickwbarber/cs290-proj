import * as common from "./common.js";


function enableSlider() {
    // adapted from [Dev Ed](https://www.youtube.com/watch?v=KcdBOoK3Pfw)
    const slider = document.querySelector('.slider');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const numImages = slider.querySelectorAll('.slider img').length;

    // slide one over to start
    slider.style.transform = `translateX(${-slider.clientWidth}px)`;

    let i = 1;  // represents current location in slideshow

    function nextSlide() {
        if (i >= numImages-1) return;  // handles clicking before transition end
        slider.classList.add('slider-animate');  // slide animation
        let width = slider.clientWidth;
        i++;
        slider.style.transform = `translateX(${-width * i}px)`;
    }

    function prevSlide() {
        if (i <= 0) return;  // handles clicking before transition end
        slider.classList.add('slider-animate');
        let width = slider.clientWidth;
        i--;
        slider.style.transform = `translateX(${-width * i}px)`;
    }

    // restart slideshow to create circular effect
    slider.addEventListener('transitionend', () => {
        if (i === 0) {
            slider.classList.add('no-animate');  // prevents jarring reset animation
            let width = slider.clientWidth;
            i = numImages-2;
            slider.style.transform = `translateX(${-width * i}px)`;
            slider.offsetHeight;  // forces a recognition of new animation rules
            slider.classList.remove('no-animate');
        }
        else if (i === numImages-1) {
            slider.classList.add('no-animate');
            let width = slider.clientWidth;
            i = 1;
            slider.style.transform = `translateX(${-width * i}px)`;
            slider.offsetHeight;
            slider.classList.remove('no-animate');
        }
    });

    const repeatNextSlide = setInterval(nextSlide, 3000);  // auto-play

    // activate buttons
    nextBtn.onclick = () => { clearInterval(repeatNextSlide); nextSlide(); };
    prevBtn.onclick = () => { clearInterval(repeatNextSlide); prevSlide(); };
}


// actually do the stuff
common.disableLinksToCurrentPage('.home-link');
enableSlider();
