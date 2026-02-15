
        let isLogin = true;

        function toggleMode() {
            const title = document.getElementById('title');
            const glowRing = document.getElementById('glow-ring');
            const loginFields = document.getElementById('login-fields');
            const signupFields = document.getElementById('signup-fields');
            const btn = document.getElementById('main-btn');
            const toggleText = document.getElementById('toggle-text');

            if (isLogin) {
                title.innerText = "Sign Up";
                btn.innerText = "Register";
                toggleText.innerText = "Already have an account? Login";
                loginFields.style.display = "none";
                signupFields.style.display = "block";
                
                // Clockwise theke Anti-clockwise switch
                glowRing.classList.remove('clockwise');
                glowRing.classList.add('anticlockwise');
                isLogin = false;
            } else {
                title.innerText = "Login";
                btn.innerText = "Login";
                toggleText.innerText = "Create account";
                loginFields.style.display = "block";
                signupFields.style.display = "none";
                
                // Anti-clockwise theke Clockwise switch
                glowRing.classList.remove('anticlockwise');
                glowRing.classList.add('clockwise');
                isLogin = true;
            }
        }
    