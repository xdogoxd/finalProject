document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll<HTMLImageElement>('.gallery__img');
    const homeItems = document.querySelectorAll<HTMLDivElement>('.home');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * 200); // Add a delay of 200ms per image
            }
        });
    }, observerOptions);

    galleryImages.forEach(image => {
        observer.observe(image);
    });

    homeItems.forEach((home, index) => {
        observer.observe(home);
    });

    // Adding hover effect to homes
    homeItems.forEach(home => {
        home.addEventListener('mouseenter', () => {
            home.classList.add('hover-scale');
        });
        home.addEventListener('mouseleave', () => {
            home.classList.remove('hover-scale');
        });
    });
});