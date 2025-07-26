let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)
document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "login.html"; // Change this URL to your login page
});