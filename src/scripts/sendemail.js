window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('Operation Successed.');
            }, (error) => {
                console.log('Operation Failed: ', error);
            });
    });
}