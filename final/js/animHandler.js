document.addEventListener('DOMContentLoaded', function () {
    var galleryImages = document.querySelectorAll('.gallery__img');
    var homeItems = document.querySelectorAll('.home');
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry, index) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * 200); // Add a delay of 200ms per image
            }
        });
    }, observerOptions);
    galleryImages.forEach(function (image) {
        observer.observe(image);
    });
    homeItems.forEach(function (home, index) {
        observer.observe(home);
    });
    // Adding hover effect to homes
    homeItems.forEach(function (home) {
        home.addEventListener('mouseenter', function () {
            home.classList.add('hover-scale');
        });
        home.addEventListener('mouseleave', function () {
            home.classList.remove('hover-scale');
        });
    });
});
