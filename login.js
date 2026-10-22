window.addEventListener('DOMContentLoaded', () => {

    const SUPABASE_URL = "https://supabase.co";
    const SUPABASE_KEY = "sb_publishable_wUexGffdXvWypGK93Pw-4A_e0uM_K7-";

    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.textContent = "Creating your account...";
        message.style.color = "orange";

        const button = document.getElementById("signin-button");
        button.disabled = true;

        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email: email,
                password: password
             });

            if (error) throw error;

            if (data.session) {
                message.textContent = "Your account has been created successfully!";
                message.style.color = "green";
            } else {
                message.textContent = "Sign-up submitted! Check your email for a confirmation link.";
                message.style.color = "green";
            }

            loginForm.reset();

        } catch (error) {
            message.textContent = "Could not create account: " + error.message;
            message.style.color = "red";
        } finally {
            button.disabled = false;
        }
    });
});
