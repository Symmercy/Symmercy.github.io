document.addEventListener("DOMContentLoaded", function () {
    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change the header background color
    var header = document.querySelector("header");
    header.style.backgroundColor = getRandomColor();

    // Check the saved theme preference
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

function toggleTheme() {
  var body = document.body
  if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");

  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme")

  }
}
