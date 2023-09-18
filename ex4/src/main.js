$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $('#membershipForm').find('input').each(
        function(index) {  
            var input = $(this)[0]

            // add danger colour on invalid event 
            input.oninvalid = (e) => {
                input.classList.add("is-danger")
            };

            // remove potentially added danger colour on new input
            input.oninput = (e) => {
                if (input.validity.valid) {
                    input.classList.remove("is-danger")
                }
            }
        }
    );

    // require both password values to be identical
    const form = document.getElementById('membershipForm');
    form.onsubmit = (e) => {
        let passwordsEqual = form.password.value === form.passwordConfirm.value;

        if (!passwordsEqual) {
            form.passwordConfirm.classList.add("is-danger")

            // add a help text for the user
            if ($(form.passwordConfirm).siblings('p').length < 1) {
                const p = document.createElement("p")
                p.innerText = "Passwords are not equal"
                p.classList.add("help", "is-danger")
                form.passwordConfirm.after(p)
            }
        } else {
            // remove the warning colour and all warning texts
            form.passwordConfirm.classList.remove("is-danger")
            $(form.passwordConfirm).siblings('p').remove();
        }

        return passwordsEqual;
    }
});