const contactInput = document.getElementById("contact");
const contactForm = document.getElementById("contactForm");

contactInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
});

contactForm.addEventListener("submit", function (event) {
    const contact = contactInput.value;
    const notice = document.getElementById("notice");

    if (!/^[0-9]{7,15}$/.test(contact)) {
        event.preventDefault();
        notice.textContent =
            "Please enter 7 to 15 digits for your contact number.";
        notice.style.color = "red";
    }
});