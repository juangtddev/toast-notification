const buttons = document.querySelectorAll(".btn");
const toastBox = document.getElementById("toastBox");

// Message templates for different notification types
const messages = {
    success: {
        message: 'Successfully submitted!',
        icon: '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>', // Icon for success
        color: '#63E6BE' // Color for progress bar
    },
    error: {
        message: 'Please fix the error!',
        icon: '<i class="fa-solid fa-circle-xmark" style="color: #e01515;"></i>', // Icon for error
        color: '#e01515' // Color for progress bar
    },
    invalid: {
        message: 'Invalid input, check again!',
        icon: '<i class="fa-solid fa-circle-exclamation" style="color: #FFD43B;"></i>', // Icon for invalid
        color: '#FFD43B' // Color for progress bar
    }
};

// Add event listeners to buttons for toast notifications
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        showToast(messages[type].icon, messages[type].message, messages[type].color);
    });
});

// Function to display the toast notification
function showToast(icon, message, color) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    // Set the inner HTML to include both the icon and the message
    toast.innerHTML = `${icon} <span>${message}</span>`;

    // Create a dynamic progress bar with the specified color
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.style.background = color; // Set the background color of the progress bar
    toast.appendChild(progressBar); // Add the progress bar to the toast

    toastBox.appendChild(toast);

    // Automatically remove toast after 6 seconds
    setTimeout(() => {
        toast.remove();
    }, 6000);
}
