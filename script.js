document.addEventListener('DOMContentLoaded', function() {
    // تهيئة AOS للحركات عند التمرير
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out-quad'
    });

    // تهيئة GSAP مع ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('show');
            }
        });
    });
    
    // Portfolio Items
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolioItems = [
        {
            title: 'تصميم شعار لمطعم',
            category: 'تصميم جرافيك',
            image: 'portfolio1.jpg'
        },
        {
            title: 'موقع تجاري',
            category: 'تطوير الويب',
            image: 'portfolio4.jpg'
        },
        {
            title: 'تطبيق توصيل طعام',
            category: 'تطبيقات الجوال',
            image: 'portfolio5.jpg'
        },
        {
            title: 'هوية بصرية',
            category: 'تصميم جرافيك',
            image: 'portfolio2.jpg'
        },
        {
            title: 'نظام إدارة محتوى',
            category: 'تطوير الويب',
            image: 'portfolio3.jpg'
        },
        {
            title: 'تطبيق لياقة بدنية',
            category: 'تطبيقات الجوال',
            image: 'portfolio6.jpg'
        }
        
       
    ];
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <img src="images/${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.category}</p>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // تفاعلات خاصة بقسم الخدمات
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        // تأثير عند التحويم
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                duration: 0.3
            });
            
            const icon = card.querySelector('i');
            gsap.to(icon, {
                y: -5,
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
                duration: 0.3
            });
            
            const icon = card.querySelector('i');
            gsap.to(icon, {
                y: 0,
                duration: 0.3
            });
        });
        
        // تأثير عند النقر
        card.addEventListener('click', function() {
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
        });
    });

    // تأثير تتابعي للخدمات عند التمرير
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            onEnter: () => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1 }
                );
            }
        });
    });

    // حركات GSAP للعناصر الرئيسية
    gsap.from(".logo", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    gsap.from("nav ul li", {
        duration: 1,
        x: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: "back.out"
    });

    // حركة للقسم الرئيسي
    gsap.from(".hero h2", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top center"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero p", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top center"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });

    gsap.from(".btn-gold", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top center"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6
    });

    // حركات للفريق
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 70%"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // تأثيرات النموذج
    gsap.from(".contact-form", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".contact-info", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3
    });

    // تأثيرات عند تحميل الصفحة
    const tl = gsap.timeline();
    tl.from("header", { y: -100, opacity: 0, duration: 0.8 })
      .from(".hero", { opacity: 0, duration: 1 }, "-=0.5");

    // تأثيرات الإحصائيات
    const stats = document.querySelectorAll('.number');
    const statsSection = document.querySelector('.stats');
    
    function animateStats() {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75) && 
                          (rect.bottom >= window.innerHeight * 0.25);
        
        if (isVisible) {
            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const counter = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        clearInterval(counter);
                        stat.textContent = target;
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 16);
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateStats);
        }
    }
    
    // Only animate when stats section is visible
    window.addEventListener('scroll', animateStats);
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
            this.reset();
        });
    }
});