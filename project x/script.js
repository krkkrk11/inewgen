// script.js
function changeLanguageLogin() {
    const translations = {
        en: {
            login: "Login",
            usernameLabel: "Username:",
            passwordLabel: "Password:",
            loginButton: "Login",
        },
        th: {
            login: "เข้าสู่ระบบ",
            usernameLabel: "ชื่อผู้ใช้:",
            passwordLabel: "รหัสผ่าน:",
            loginButton: "เข้าสู่ระบบ",
        },
    };
    const selectedLanguage = document.getElementById("language").value;
    const translation = translations[selectedLanguage];

    // Update text content based on selected language
    document.getElementById("login").textContent = translation.login;
    document.getElementById("username-label").textContent = translation.usernameLabel;
    document.getElementById("password-label").textContent = translation.passwordLabel;
    document.getElementById("submit-button").textContent = translation.loginButton;
    // Update the menu text based on the selected language
    document.getElementById("home").textContent = (selectedLanguage === "en") ? "Home" : "หน้าแรก";
    document.getElementById("about").textContent = (selectedLanguage === "en") ? "About" : "เกี่ยวกับเรา";
    document.getElementById("Product").textContent = (selectedLanguage === "en") ? "Product" : "สิงค้า";
    document.getElementById("contact").textContent = (selectedLanguage === "en") ? "Contact" : "ติดต่อเรา";
    document.getElementById("sign-in").textContent = (selectedLanguage === "en") ? "Sign in" : "เข้าสู่ระบบ";
}

function changeLanguageMain() {
    var selectedLanguage = document.getElementById("language").value;

    // Update the main content based on the selected language
    if (selectedLanguage === "en") {
        document.getElementById("title-w").textContent = "Welcome to Pronhub.com";
        document.getElementById("content").textContent = "A free adult movie site featuring your mom.";
    } else if (selectedLanguage === "th") {
        document.getElementById("title-w").textContent = "ยินดีต้อนรับสู่ Pronhub.com";
        document.getElementById("content").textContent = "แพลตฟอร์มสำหรับวิดีโอคุณภาพสูงในหัวข้อต่างๆ";
    }
    // Add more language cases as needed

    // Update the menu text based on the selected language
    document.getElementById("home").textContent = (selectedLanguage === "en") ? "Home" : "หน้าแรก";
    document.getElementById("about").textContent = (selectedLanguage === "en") ? "About" : "เกี่ยวกับเรา";
    document.getElementById("Product").textContent = (selectedLanguage === "en") ? "Product" : "สิงค้า";
    document.getElementById("contact").textContent = (selectedLanguage === "en") ? "Contact" : "ติดต่อเรา";
    document.getElementById("sign-in").textContent = (selectedLanguage === "en") ? "Sign in" : "เข้าสู่ระบบ";
}

