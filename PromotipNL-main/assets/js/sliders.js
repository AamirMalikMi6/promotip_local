import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

var slides = document.querySelectorAll('.splide');

slides.forEach( function (slide) {
    var splide = new Splide(slide, {
        type: 'loop',
        perPage: 5,
        padding: 0,
        gap: 15,
        breakpoints: {
            576: {
                perPage: 1,
                gap: 0,
                padding: 0,
            },
            768: {
                perPage: 2,
            },
            992: {
                perPage: 3,
            },
        },
        focus: 'center',
        updateOnMove: true,
        pagination: true,
        autoplay: true,
    }).mount();

    let minImgIndex = 0;
    splide.on( 'visible', function () {
        const slides = splide.Components.Elements.slides;

        slides.forEach(slide => {
            if ( slide.classList.contains('is-visible') ) {
                const link = slide.children[2];
                const imagesInLink = link.children;
                const arrayImages = Array.from(imagesInLink);

                if ( arrayImages.length > 1 ) {

                    arrayImages.forEach( function(img) {
                        if ( img.classList.contains ('d-block') ) {
                            img.classList.remove('d-block');
                            img.className += ' d-none';
                        }
                    });

                    let currentIndex = getRandomImageIndex(minImgIndex, imagesInLink.length);
                    arrayImages[currentIndex].classList.remove('d-none');
                    arrayImages[currentIndex].classList.add('d-block');
                    
                }
            }
        });
        
    } );

    splide.on( 'active', function () {
        const slides = splide.Components.Elements.slides;

        slides.forEach(slide => {
            if ( slide.classList.contains('is-visible') ) {
                const link = slide.children[2];
                const imagesInLink = link.children;
                const arrayImages = Array.from(imagesInLink);

                if ( arrayImages.length > 1 ) {

                    arrayImages.forEach( function(img) {
                        if ( img.classList.contains ('d-block') ) {
                            img.classList.remove('d-block');
                            img.className += ' d-none';
                        }
                    });

                    let currentIndex = getRandomImageIndex(minImgIndex, imagesInLink.length);
                    arrayImages[currentIndex].classList.remove('d-none');
                    arrayImages[currentIndex].classList.add('d-block');
                    
                }
            }
        });
        
    } );
});

function getRandomImageIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}