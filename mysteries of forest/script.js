function closeSideBar(){
const sidebar = document.querySelector(".sidebar");
const menuBars = document.querySelector(".menu-bar");
menuBars.style.display ="flex";
sidebar.style.display = "none"
}
function showSideBar(){
    const sidebar = document.querySelector(".sidebar");
    const menuBars = document.querySelector(".menu-bar");
sidebar.style.display = "flex";
menuBars.style.display ="none";
}

// function modeOpen(){
//     const open =document.querySelector(".fa-eye");
//     const hide =document.querySelector(".fa-eye-slash");
//     open.style.display ="block";
//     hide.style.display ="none";
// }
// function modeClose(){
//     const open =document.querySelector(".fa-eye");
//     const hide =document.querySelector(".fa-eye-slash");
//     open.style.display ="none";
//     hide.style.display ="block";
// }

  document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("passwordInput");
    const eye = this.querySelector(".fa-eye");
    const eyeSlash = this.querySelector(".fa-eye-slash");
    const toggleText = this.querySelector(".toggle-text");

    const isPasswordVisible = passwordInput.type === "text";

    if (isPasswordVisible) {
      passwordInput.type = "password";
      eye.style.display = "none";
      eyeSlash.style.display = "inline";
      toggleText.textContent = "Hide";
    } else {
      passwordInput.type = "text";
      eye.style.display = "inline";
      eyeSlash.style.display = "none";
      toggleText.textContent = "Show";
    }
  });