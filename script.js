document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.backgroundColor = '#ffcc00';
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.backgroundColor = '#ffd700';
        ctaButton.style.transform = 'scale(1)';
    });

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-10px)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0)';
        });
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const button = form.querySelector('button');
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#ffcc00';
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#ffd700';
            button.style.transform = 'scale(1)';
        });
    });
});