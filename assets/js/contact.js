/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_qlukgez', 'template_i52ehb4', '#contact-form', 'NB_OICBC7RvwAqCBk').then(() => {
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        //Show error message
        contactMessage.textContent = ' Message not sent (service error) ❌'
    });
}

contactForm.addEventListener('submit', sendEmail);

