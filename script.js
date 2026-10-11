
function generateGreeting() {
    let name = document.getElementById("name").value.trim();
    let ageInput = document.getElementById("age").value.trim();
    let age = Number(ageInput);
    let result = document.getElementById("result");








    if (name === "" || ageInput === "") {
        result.innerHTML = "Please enter your name and age.";
        return;
    }




    if (age < 0 || !Number.isInteger(age)) {
        result.innerHTML = "Please enter a valid age.";
        return;
    }

    let message = name + ", my friend!";

    if (age < 18) {
        result.innerHTML =
            "<h2>" + message + "</h2>" +
            "<p>Ikaw ay " + age + " taong gulang.</p>" +
            "<p>Mukha ka kasing may anak na eh.</p>";
    } else {
        result.innerHTML =
            "<h2>" + message + "</h2>" +
            "<p>Ikaw ay " + age + " taong gulang.</p>" +
            "<p>Sabi na eh, itsura palang eh.</p>";


    }
}
