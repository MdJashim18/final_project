// Registration Form Handler
const handleRegistration = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const role = document.getElementById("role").value;

    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
        status:role,
    };

    if (password === confirm_password) {
        document.getElementById("error").innerText = "";
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            console.log(info);

            fetch("http://127.0.0.1:8000/employee/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    
                    if (data.success) {
                        // Show the "Check your email" message
                        document.body.innerHTML = `
                        <div class="message-container">
                            <h2>Registration Successful!</h2>
                            <p>Please check your email (${email}) for a verification link.</p>
                        </div>
                `;
                    } else {
                        // Handle server-side validation errors
                        document.getElementById("error").innerText = data.error || "An error occurred during registration.";
                    }
                });
        } else {
            document.getElementById("error").innerText =
                "Password must contain at least eight characters, one letter, one number, and one special character.";
        }
    } else {
        document.getElementById("error").innerText = "Password and confirm password do not match.";
    }
};

// Login Form Handler
const handleLogin = (event) => {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username && password) {
        fetch("http://127.0.0.1:8000/employee/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    document.getElementById("error").innerText = data.error;
                } else {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("role", data.role);

                    if (data.role === "employee") {
                        window.location.href = "employee-profile.html";
                    } else {
                        window.location.href = "user-profile.html";
                    }
                }
            })
            .catch((err) => {
                document.getElementById("error").innerText = "An error occurred during login. Please try again.";
            });
    } else {
        document.getElementById("error").innerText = "Username and password are required.";
    }
};

// Attach event listeners
// document.getElementById("registration-form").addEventListener("submit", handleRegistration);
// document.getElementById("login-form").addEventListener("submit", handleLogin);