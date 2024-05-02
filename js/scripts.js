window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && (window.location.pathname.includes('policy_fr')||window.location.pathname.includes('policy'))===false) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }

    };
    navbarShrink();

    // Shrink the navbar 
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    const whatsappButton = document.querySelector('.whatsapp-button');


    whatsappButton.addEventListener('click', () => {
        const phoneNumber = '+33748364359'; // Your phone number
        const url = `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
        window.open(url, '_blank');
    });
    
    const navbartoggler = document.querySelector('.yellow-btn');

    navbartoggler.addEventListener('click', () => {
        const phoneNumber = '+33748364359'; // Your phone number
        window.open(`tel:${phoneNumber}`);
    });
    // document.getElementById('contactForm').addEventListener('submit', function(event) {
    //     event.preventDefault(); 
    
    //     var formData = {
    //         name: document.getElementById('name').value,
    //         email: document.getElementById('email').value,
    //         phone: document.getElementById('phone').value,
    //         message: document.getElementById('message').value
    //     };
    
    //     console.log('send');
    //     emailjs.send("service_721rqty", "template_u4im5zf", formData)
    //         .then(function(response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //             document.getElementById('submitSuccessMessage').classList.remove('d-none');
    //             document.getElementById('submitButton').classList.add('disabled');
    //         }, function(error) {
    //             console.log('FAILED...', error);
    //             document.getElementById('submitErrorMessage').classList.remove('d-none');
    //         });
    
    //     // Reset the form after submission (optional)
    //     document.getElementById('contactForm').reset();
    // });
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
    
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
    
        // Send the form data via EmailJS
        emailjs.send("service_721rqty", "template_u4im5zf", formData)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                document.getElementById('submitButton').setAttribute('disabled', 'disabled');
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('submitErrorMessage').classList.remove('d-none');
            });
    
        // Reset the form after submission (optional)
        document.getElementById('contactForm').reset();
    });
    
});

