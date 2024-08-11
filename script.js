document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = false; // Set this to true when the user is logged in

    if (!isLoggedIn) {
        window.location.href = 'login.html'; // Redirect to login page if not logged in
    }
});