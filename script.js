document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.cardBoxAccordion');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', toggleAccordion);
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                toggleAccordion.call(this);
                event.preventDefault();
            }
        });
    });

    function toggleAccordion() {
        const content = this.querySelector('.accordionContent');
        const icon = this.querySelector('.accordionIcon');
        const text = this.querySelector('.accordionText');

        if (content.classList.contains('open')) {
            content.classList.remove('open');
            text.classList.remove('open');
            icon.src = "assets/images/icon-plus.svg";
            this.setAttribute('aria-expanded', 'false');
        } else {
            content.classList.add('open');
            text.classList.add('open');
            icon.src = "assets/images/icon-minus.svg";
            this.setAttribute('aria-expanded', 'true');
        }
    }
});