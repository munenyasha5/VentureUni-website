const bookStayButton = document.getElementById("bookstay-button");

if (bookStayButton) {

    bookStayButton.addEventListener("click", async function () {

        bookStayButton.disabled = true;

        try {

            // Check whether the student has a valid session
            const { data, error } =
                await supabaseClient.auth.getSession();

            if (error) {
                throw error;
            }

            const session = data.session;

            if (session) {

                // Student is logged in; continue to booking
                window.location.href = "booking.html";

            } else {

                // Student is not logged in.
                // Save the page they want to reach.
                const returnTo = "booking.html";

                window.location.href =
                    "login.html?returnTo=" +
                    encodeURIComponent(returnTo);

            }

        } catch (error) {

            alert("We couldn't check your login status. Please try again."
                 +
        "Open the browser Console to see the actual error."
            );

            console.error(error);

        } finally {

            bookStayButton.disabled = false;

        }

    });

}