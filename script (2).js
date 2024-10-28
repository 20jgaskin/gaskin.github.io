// script.js

function submitForm() {
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create JSON object
    const userData = {
        "username": username,
        "email": email,
        "password": password
    };

    // Display JSON in a formatted way
    document.getElementById('jsonOutput').innerHTML = "<pre>" + JSON.stringify(userData, null, 4) + "</pre>";
}
