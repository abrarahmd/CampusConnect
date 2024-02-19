//Logout-Btn
let popup = document.querySelector(".popup");
function openPopup() {
    popup.classList.add("active");
}
function closePopup() {
    popup.classList.remove("active");
}
function logout() {
    window.location.href = "/auth/logout";
}


document.getElementById("logoutButton").addEventListener("click", logout);

document.getElementById("show-login").addEventListener("click", openPopup);
document.querySelector(".popup .close-btn").addEventListener("click", closePopup);

//Update-Profile
document.getElementById("updateBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to update?")) {
        updateProfile();
    } else {
    }
});
function updateProfile() {
    // Have to write the code for updating
}
