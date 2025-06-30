
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                if (window.innerWidth <= 995) {
                    const navbar = document.querySelector('.navbar');
                    const menuIcon = document.querySelector('#menu-icon');
                    navbar.classList.remove('active');
                    menuIcon.classList.remove('fa-xmark');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });

        window.addEventListener('scroll', () => {
            let sections = document.querySelectorAll('section');
            let navLinks = document.querySelectorAll('header nav a');

            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                    });
                    const currentNavLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (currentNavLink) {
                        currentNavLink.classList.add('active');
                    }
                }
            });
        });

        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        });
    
