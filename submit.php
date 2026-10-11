<?php
$conn = new mysqli("localhost", "root", "", "contact_db");

if ($conn->connect_error) {
    die("Database connection failed. Check your XAMPP settings.");
}

$conn->set_charset("utf8mb4");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    exit("Please submit the contact form.");
}

$name = trim($_POST["name"] ?? "");
$address = trim($_POST["address"] ?? "");
$contact = trim($_POST["contact"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

if (
    $name === "" ||
    $address === "" ||
    $message === "" ||
    !preg_match('/^[0-9]{7,15}$/', $contact) ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    exit("Invalid input. Please check your information.");
}

$stmt = $conn->prepare(
    "INSERT INTO messages
    (name, address, contact, email, message)
    VALUES (?, ?, ?, ?, ?)"
);

$stmt->bind_param(
    "sssss",
    $name,
    $address,
    $contact,
    $email,
    $message
);

if ($stmt->execute()) {
    echo "<h2>Message submitted successfully!</h2>";
    echo "<p>Thank you, " .
        htmlspecialchars($name, ENT_QUOTES, "UTF-8") . "!</p>";
    echo '<a href="TUESDAY%20ACT.html">Return to the form</a>';
} else {
    echo "Unable to submit your message.";
}

$stmt->close();
$conn->close();
?>