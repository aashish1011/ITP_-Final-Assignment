document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the page from reloading

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been received. We’ll get back to you shortly.`);
        form.reset();
    });
});
