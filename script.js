
function generateGreeting() {
    let name = document.getElementById("name").value.trim();
    let ageInput = document.getElementById("age").value;
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

    let message = "Hello, " + name + "! Welcome to our webpage.";

    if (age < 18) {
        result.innerHTML =
            "<h2>" + message + "</h2>" +
            "<p>You are " + age + " years old.</p>" +
            "<p>You are a minor.</p>";
    } else {
        result.innerHTML =
            "<h2>" + message + "</h2>" +
            "<p>You are " + age + " years old.</p>" +
            "<p>You are an adult.</p>";
    }
}
