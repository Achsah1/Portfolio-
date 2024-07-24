document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    const contactLink = document.querySelector('ul.list li a[href="#contact"]');
    const closeBtn = document.querySelector('.modal .close');

    
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
