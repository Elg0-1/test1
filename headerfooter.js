// function to load the header
function loadHeader() {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("header").innerHTML = data;
      });
  }
  
  // function to load the footer
  function loadFooter() {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.querySelector("footer").innerHTML = data;
      });
  }
  document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
  });
  