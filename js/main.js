/* ==========================================
   THE KINGDOM CULTURE CLUB - MAIN JAVASCRIPT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("The Kingdom Culture Club JS Initialized.");

    // 1. SEARCH/FILTER FUNCTIONALITY (For Services/Projects Page)
    const searchInput = document.getElementById("projectSearch");
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const query = e.target.value.toLowerCase();
            const projectCards = document.querySelectorAll(".project-card");

            projectCards.forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                const description = card.querySelector("p").textContent.toLowerCase();

                if (title.includes(query) || description.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    // 2. CLIENT-SIDE FORM VALIDATION (Enquiry & Contact Forms)
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullName = document.getElementById("fullname").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const feedbackDiv = document.getElementById("formFeedback");

            if (fullName === "" || email === "" || message === "") {
                showFeedback(feedbackDiv, "Please fill in all required fields.", "error");
                return;
            }

            if (!isValidEmail(email)) {
                showFeedback(feedbackDiv, "Please enter a valid email address.", "error");
                return;
            }

            // Success Response Simulation
            showFeedback(feedbackDiv, "Thank you! Your enquiry regarding membership/sponsorship has been received. We will be in touch shortly.", "success");
            enquiryForm.reset();
        });
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const msg = document.getElementById("contactMessage").value.trim();
            const feedbackDiv = document.getElementById("contactFeedback");

            if (name === "" || email === "" || msg === "") {
                showFeedback(feedbackDiv, "All fields are required.", "error");
                return;
            }

            // Compile into mailto simulation
            const mailtoLink = `mailto:info@kingdomcultureclub.co.za?subject=Website Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
            window.location.href = mailtoLink;

            showFeedback(feedbackDiv, "Opening your email client to send the message...", "success");
        });
    }
});

// Helper Functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFeedback(element, message, type) {
    if (!element) return;
    element.textContent = message;
    element.style.padding = "10px";
    element.style.marginTop = "10px";
    element.style.borderRadius = "4px";
    
    if (type === "error") {
        element.style.backgroundColor = "#e74c3c";
        element.style.color = "#fff";
    } else {
        element.style.backgroundColor = "#27ae60";
        element.style.color = "#fff";
    }
}