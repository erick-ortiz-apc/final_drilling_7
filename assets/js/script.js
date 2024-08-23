document.addEventListener('DOMContentLoaded', function () {
    const toggleModeBtn = document.getElementById('toggleMode');
    
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    toggleModeBtn.textContent = 'Modo Claro';

    toggleModeBtn.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            toggleModeBtn.textContent = 'Modo Oscuro';
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            toggleModeBtn.textContent = 'Modo Claro';
        }
    });
});

function showModal(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');

    if (form.checkValidity()) {
        const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
        contactModal.show();
        document.getElementById('okButton').addEventListener('click', function() {
            form.reset();
        });
    } else {
        form.reportValidity();
    }
}

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;