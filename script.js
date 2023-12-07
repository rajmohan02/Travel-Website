document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById("booking-button");
    whatsappButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        openWhatsapp();
    });

    function openWhatsapp() {
        const Name = document.getElementById("Name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const departDate = document.getElementById("depart-date").value;
        const returnDate = document.getElementById("return-date").value;
        const persons = document.getElementById("persons").value;

        // Constructing the message with form field values
        const combinedString = `Name: ${Name}, Email: ${email}, Phone: ${phone}, From: ${from}, To: ${to}, Date of Departure: ${departDate}, Date of Return: ${returnDate}, Persons: ${persons}`;

        // Encoding the message and generating the WhatsApp URL
        const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(combinedString)}`;

        // Open a new window with the WhatsApp URL
        window.open(whatsappURL, '_blank');
    }
});
