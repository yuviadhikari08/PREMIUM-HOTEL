document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Navigation Scroll Effect
    const nav = document.getElementById('main-nav');
    const logoText = document.querySelector('.logo-text');
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelectorAll('.nav-links a:not(.btn-book)');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white', 'shadow-md', 'py-2');
            nav.classList.remove('bg-transparent', 'py-4');
            
            navLinks.forEach(link => link.classList.add('text-gray-800'));
            navLinks.forEach(link => link.classList.remove('text-white'));
            
            if (logoText) {
                logoText.classList.add('text-nature-green');
                logoText.classList.remove('text-white');
            }
            
            if (menuBtn) {
                menuBtn.classList.add('text-gray-800');
                menuBtn.classList.remove('text-white');
            }
        } else {
            nav.classList.remove('bg-white', 'shadow-md', 'py-2');
            nav.classList.add('bg-transparent', 'py-4');
            
            navLinks.forEach(link => link.classList.remove('text-gray-800'));
            navLinks.forEach(link => link.classList.add('text-white'));
            
            if (logoText) {
                logoText.classList.remove('text-nature-green');
                logoText.classList.add('text-white');
            }
            
            if (menuBtn) {
                menuBtn.classList.remove('text-gray-800');
                menuBtn.classList.add('text-white');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Mobile Menu Logic
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && closeBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    window.openLightbox = function(element) {
        const imgSrc = element.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function() {
        lightbox.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('nav-link-active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('nav-link-active');
            }
        });
    });
});
