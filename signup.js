const signupForm = document.getElementById("signup-form");
const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const message = document.getElementById("message");
const signupButton = document.getElementById("signup-button");

signupForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    // Read the information entered by the student
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
        message.textContent = "Please complete all fields.";
        return;
    }

    if (password.length < 8) {
        message.textContent =
            "Your password must contain at least 8 characters.";
        return;
    }

    signupButton.disabled = true;
    message.textContent = "Creating your Venture Uni account...";

    try {

        // Ask Supabase to create the authentication account
        const { data, error } = await supabaseClient.auth.signUp({

            email: email,

            password: password,

            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName
                }
            }

        });

        // If Supabase reports an error, display it
        if (error) {
            throw error;
        }

        // Handle the successful response
        if (data.user && data.session) {

            message.textContent =
                "Account created successfully! Redirecting to login...";

            signupForm.reset();

            setTimeout(function () {
                window.location.href = "login.html";
            }, 1800);

        } else if (data.user) {

            message.textContent =
                "Account created! Please check your email to confirm your account before signing in.";

            signupForm.reset();

        } else {

            message.textContent =
                "Registration was submitted. Check your email for further instructions.";

        }

    } catch (error) {

        message.textContent =
            "Signup failed: " + error.message;

    } finally {

        signupButton.disabled = false;

    }

});