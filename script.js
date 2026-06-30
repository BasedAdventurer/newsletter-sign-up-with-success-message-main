document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const formHeader = document.querySelector(".form-header");

    const signupSection = document.querySelector(".section__signup");
    const successSection = document.querySelector(".section__modal-success");
    const userEmailPlaceholder = document.getElementById("user-email-placeholder");
    const dismissBtn = document.getElementById("dismiss-btn");

    // Email Validation Check Function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const emailValue = emailInput.value.trim();

        if (emailValue === "" || !validateEmail(emailValue)) {
            formHeader.classList.add("error");
            emailInput.classList.add("error");
        } else {
            formHeader.classList.remove("error");
            emailInput.classList.remove("error");

            userEmailPlaceholder.textContent = emailValue;

            signupSection.style.display = "none";
            successSection.style.display = "flex";
        }
    });

    emailInput.addEventListener("input", () => {
        if(emailInput.classList.contains("error")) {
            formHeader.classList.remove("error");
            emailInput.classList.remove("error");
        }
    });

    dismissBtn.addEventListener("click", () => {
        form.reset();
        successSection.style.display = "none";
        signupSection.style.display = "flex";
    });
});

