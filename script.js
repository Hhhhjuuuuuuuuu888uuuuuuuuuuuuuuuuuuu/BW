function Check() {
    const phoneInput = document.getElementById('number');
    const passwordInput = document.getElementById('password');
    const errorParagraph = document.getElementById('p');
    let isValid = true;
    
    // Reset previous error messages
    errorParagraph.style.display = 'none';
    errorParagraph.textContent = '';
    phoneInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    // Validate phone number
    if (!phoneInput.value) {
        showError(phoneInput, errorParagraph, 'Mobile number is required');
        isValid = false;
    } else if (phoneInput.value.length < 10) {
        showError(phoneInput, errorParagraph, 'Mobile number must be at least 10 digits');
        isValid = false;
    }

    // Validate password
    if (!passwordInput.value) {
        // Only show password error if phone is valid (to avoid multiple errors)
        if (isValid) showError(passwordInput, errorParagraph, 'Password is required');
        isValid = false;
    } else if (passwordInput.value.length < 3) {
        // Only show password error if phone is valid
        if (isValid) showError(passwordInput, errorParagraph, 'Password must be more than 3 characters');
        isValid = false;
    }

    return isValid;
}

function showError(inputElement, errorParagraph, message) {
    errorParagraph.style.display = 'block';
    errorParagraph.textContent = message;
    inputElement.style.borderColor = 'red';
    inputElement.focus();
}

// Update the form submission to use our validation
document.querySelector('form').addEventListener('submit', function(event) {
    if (!Check()) {
        event.preventDefault(); // This stops the form from submitting
    }
});

// Add input event listeners to clear error when user starts typing
document.getElementById('number').addEventListener('input', function() {
    this.style.borderColor = '';
    document.getElementById('p').style.display = 'none';
});

document.getElementById('password').addEventListener('input', function() {
    this.style.borderColor = '';
    document.getElementById('p').style.display = 'none';
});