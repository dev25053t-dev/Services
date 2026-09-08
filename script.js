const texts = [
    "Web Developer",
    " Providing Digital Solutions",
    "Web Designer",
    "Data Analyst",
    "Power BI Developer ",
    "SQL Developer ",
    "Python Developer"
];

let textindex =0;
let charindex =0; 
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
    const currentText = texts[textindex];
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charindex -1);
        charindex--;
    } else {
        typingText.textContent = currentText.substring(0, charindex +1);
        charindex++;
    }
    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charindex === currentText.length){

        speed = 1500;
        isDeleting = true;
        
    }
    else if (isDeleting && charindex === 0){
        isDeleting = false;
        textindex++;
        if (textindex === texts.length) {
            textindex = 0;

        }
        speed  = 500;
    }
    
    setTimeout(typeEffect, speed);
}

typeEffect();










const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // ==============================
    // APNA WHATSAPP NUMBER YAHAN DAALO
    // Country code ke saath
    // India example: 917350267920
    // ==============================

    const ownerWhatsApp = "917350267920";


    // Customer details

    const name =
        document.getElementById("name").value;

    const mobile =
        document.getElementById("mobile").value;

    const email =
        document.getElementById("email").value;

    const service =
        document.getElementById("service").value;

    const message =
        document.getElementById("message").value;


    // WhatsApp message

    const whatsappText =

`🔔 NEW CUSTOMER ENQUIRY

👤 Name: ${name}

📱 Mobile: ${mobile}

📧 Email: ${email}

🛠 Service: ${service}

💬 Message:
${message}

🌐 Website Enquiry`;


    // WhatsApp URL

    const whatsappURL =
        "https://wa.me/" +
        ownerWhatsApp +
        "?text=" +
        encodeURIComponent(whatsappText);


    // Open WhatsApp

    window.open(whatsappURL, "_blank");


    // Submit form to email service

    form.submit();

});