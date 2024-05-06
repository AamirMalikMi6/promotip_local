import lightGallery from 'lightgallery';

import 'lightgallery/css/lightgallery.css';


lightGallery(document.getElementById('gallery'), {
    selector: '.photo',
    speed: 500,
});

lightGallery(document.getElementById('gallery_slider'), {
    selector: '.photo',
    speed: 500,
});