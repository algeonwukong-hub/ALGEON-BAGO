
            const contactForm = document.getElementById("contactForm");
            const contactInput = document.getElementById("contact");
            const notice = document.getElementById("notice");

if (contactForm && contactInput && notice) {

    contactInput.addEventListener("input", function () {
        contactInput.value = contactInput.value
            .replace(/[^0-9]/g, "")
            .slice(0, 15);

        notice.textContent = "";
    });

                        contactForm.addEventListener("submit", function (event) {
                            const contactNumber = contactInput.value;

                            if (!/^[0-9]{7,15}$/.test(contactNumber)) {
                                event.preventDefault();

                                notice.textContent =
                                    "Enter a valid contact number with 7 to 15 digits.";

                                notice.style.color = "#dc2626";
                                contactInput.focus();
                            }
                        });

                    } else {
                        console.error("Check the IDs in your HTML form.");
                    }
