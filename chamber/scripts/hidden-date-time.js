// Function to format date and time
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Set the current date and time to the hidden input field
document.addEventListener('DOMContentLoaded', () => {
    const dateAndTimeField = document.getElementById('dateAndTime');
    const now = new Date();
    dateAndTimeField.value = formatDateTime(now);
});
