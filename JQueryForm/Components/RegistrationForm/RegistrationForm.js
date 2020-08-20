jQuery.validator.addMethod(
    "noSpace",
    function (value, element) {
        return value == "" || value.trim().length != 0;
    },
    "No space please and don't leave it empty"
);
jQuery.validator.addMethod(
    "customEmail",
    function (value, element) {
        return (
            this.optional(element) ||
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                value
            )
        );
    },
    "Please enter valid email address!"
);
$.validator.addMethod(
    "alphanumeric",
    function (value, element) {
        return this.optional(element) || /^\w+$/i.test(value);
    },
    "Letters, numbers, and underscores only please"
);
var $registrationForm = $("#registration");
if ($registrationForm.length) {
    $registrationForm.validate({
        rules: {
            firstname: {
                required: true,
                noSpace: true,
            },
            lastname: {
                required: true,
                noSpace: true,
            },
            gender: {
                required: true,
            },
            email: {
                required: true,
                customEmail: true,
            },
            password: {
                required: true,
            },
            confirmpassword: {
                required: true,
                equalTo: "#password",
            },
        },
        messages: {
            firstname: {
                required: "Please enter first name!",
            },
            lastname: {
                required: "Please enter last name!",
            },
            email: {
                required: "Please enter email!",
                email: "Please enter valid email!",
            },
            password: {
                required: "Please enter password!",
            },
            confirmpassword: {
                required: "Please enter confirm password!",
                equalTo: "Please enter same password!",
            },
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents(".gender"));
            } else {
                error.insertAfter(element);
            }
        },
    });
}
