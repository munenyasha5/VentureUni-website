


src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"

// 1. Connect to your Supabase project

    const SUPABASE_URL = "https://rwkqnfwxfvgxiumjmvrd.supabase.co";
    const SUPABASE_KEY = "sb_publishable_wUexGffdXvWypGK93Pw-4A_e0uM_K7-";

    const supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );
u

    // 2. Find the form and message area

    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");


    // 3. Run this code when the form is submitted

    loginForm.addEventListener("submit", async function(event) {

        // Stop the browser from reloading the page
        event.preventDefault();

        // 4. Read what the student entered

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Show a message while the request is running
        message.textContent = "Creating your account...";

        // Prevent repeated submissions while processing
        const button = loginForm.querySelector("signin-button");
        button.disabled = true;

        try {

            // 5. Send the email and password to Supabase Auth

            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password
            });

            // 6. Handle errors

            if (error) {
                throw error;
            }

            // 7. Tell the student what happened

            if (data.session) {
                message.textContent =
                    "Your account has been created successfully!";
            } else {
                message.textContent =
                    "Sign-up submitted. Check your email for a confirmation link.";
            }

            signupForm.reset();

        } catch (error) {

            message.textContent =
                "Could not create account: " + error.message;

        } finally {

            button.disabled = false;

        }

    });