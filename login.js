window.addEventListener('DOMContentLoaded', () => {

    const SUPABASE_URL = "https://rwkqnfwxfvgxiumjmvrd.supabase.co";
    const SUPABASE_KEY = "sb_publishable_wUexGffdXvWypGK93Pw-4A_e0uM_K7-";

    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.textContent = "Logging in...";
        message.style.color = "orange";

        const button = document.getElementById("login-button");
        button.disabled = true;

        try {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
             });

            if (error) throw error;

            if (data.session) {
                message.textContent = "Login successful!";
                message.style.color = "green";
                const params = new URLSearchParams(window.location.search);

const requestedDestination = params.get("returnTo");

// Only allow relative destinations from a safe list
const allowedDestinations = [
    "booking.html",
    "Venturestays.html"
];

const destination = allowedDestinations.includes(
    requestedDestination
)
    ? requestedDestination
    : "Venturestays.html";

window.location.href = destination;
            } else {
                message.textContent = "Invalid email or password.";
                message.style.color = "red";
            }

            loginForm.reset();

        } catch (error) {
            message.textContent = "Could not log in: " + error.message;
            message.style.color = "red";
        } finally {
            button.disabled = false;
        }
    });
});

