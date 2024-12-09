document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#section2 .image img');
    const mainImage = document.querySelector('#main_image img');

    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            mainImage.src = this.src;
        });

        image.addEventListener('mouseout', function() {
            mainImage.src = 'assets/film1.webp'; 
        });
    });
});
