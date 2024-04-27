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

document.getElementById("updateBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to update?")) {
        updateProfile();
    } else {
    }
});

async function updateProfile() {
    try {
        const fullName = document.getElementById('fullName').value;
        const studentID = document.getElementById('studentID').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const response = await axios.post('/auth/updateUser', {fullName, studentID, username, email, phone});

        if (response.data.success) {
            alert('User information updated successfully.');
          } else {
            alert('Failed to update user information.');
          }
        } catch (error) {
          console.error('Error updating user profile:', error);
          alert('An error occurred while updating user information.');
        }
}