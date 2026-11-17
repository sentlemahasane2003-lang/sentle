function showTime() {
            var now = new Date();
            var clock = document.getElementById("clock");
            if (clock) {
                clock.innerHTML = '<i class="bi bi-clock me-1"></i> Maseru time: ' +
                    now.toLocaleTimeString("en-GB", { timeZone: "Africa/Maseru" });
            }
        }
        showTime();
        setInterval(showTime, 1000);

        function changeMode() {
            var html = document.documentElement;
            var currentTheme = html.getAttribute("data-bs-theme");
            var newTheme = currentTheme === "dark" ? "light" : "dark";
            html.setAttribute("data-bs-theme", newTheme);
            document.body.classList.toggle("dark", newTheme === "dark");

            var button = document.getElementById("modeButton");
            if (button) {
                button.innerHTML = newTheme === "dark" 
                    ? '<i class="bi bi-sun me-1"></i> Light Mode' 
                    : '<i class="bi bi-moon-stars me-1"></i> Dark Mode';
            }
            try {
                localStorage.setItem("lesothoTheme", newTheme);
            } catch (e) {}
        }

        document.addEventListener("DOMContentLoaded", function () {
            try {
                var savedTheme = localStorage.getItem("lesothoTheme");
                if (savedTheme === "dark") {
                    document.documentElement.setAttribute("data-bs-theme", "dark");
                    document.body.classList.add("dark");
                    var btn = document.getElementById("modeButton");
                    if (btn) btn.innerHTML = '<i class="bi bi-sun me-1"></i> Light Mode';
                }
            } catch (e) {}

            // Set active navigation link
            var file = location.pathname.split("/").pop().toLowerCase();
            var page = "home";
            if (file.indexOf("about") >= 0) page = "about";
            else if (file.indexOf("destination") >= 0) page = "destinations";
            else if (file.indexOf("gallery") >= 0) page = "gallery";
            else if (file.indexOf("contact") >= 0) page = "contact";

            document.querySelectorAll("#lesothoNav .nav-link").forEach(function (link) {
                if (link.getAttribute("data-page") === page) {
                    link.classList.add("active");
                    link.classList.remove("text-white-50");
                }
            });
        });
