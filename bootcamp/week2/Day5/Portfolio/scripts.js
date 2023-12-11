document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    showTestimonial(currentTestimonial);

    document.querySelector('.next-btn').addEventListener('click', function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    document.querySelector('.prev-btn').addEventListener('click', function () {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
            testimonial.style.transition = 'transform 0.5s ease-in-out';
            testimonial.style.transform = i < index ? 'translateX(-100%)' : (i > index ? 'translateX(100%)' : 'translateX(0)');
        });
    }

    // Función para cambiar testimonios automáticamente cada 2 segundos
    setInterval(function () {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 2000);
});

function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () {
        // Verificamos si el usuario ha hecho scroll, ajusta el valor según sea necesario
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        // Si el usuario ha hecho scroll, aplicamos la clase 'scrolled'; de lo contrario, la eliminamos
        document.querySelector('.social-buttons').classList.toggle('scrolled', scrollPosition > 0);
    };
});
