async function register() {
    const nameInput = document.getElementById("fullName");      // ✅ এভাবে নাও
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameInput.value,
            email: emailInput.value,     // ✅
            password: passwordInput.value // ✅
        })
    });

    const data = await res.json();
    result.innerText = data.message;
}

const result = document.getElementById("result"); 

async function login() {
    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
            email: loginEmail.value,
            password: loginPassword.value
        })
    });

    const data = await res.json();
    result.innerText = data.message;
}

async function getSecure() {
    const res = await fetch("http://localhost:3000/secure", {
        credentials: "include"
    });

    const data = await res.json();
    result.innerText = data.message;
}

async function logout() {
    const res = await fetch("http://localhost:3000/logout", {
        method: "POST",
        credentials: "include"
    });

    const data = await res.json();
    result.innerText = data.message;
}