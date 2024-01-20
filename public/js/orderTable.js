// Use jQuery to handle the toggling of the navbar


  // Use Vanilla JavaScript to handle tab clicks
  document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".nav-link");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function (event) {
        event.preventDefault();
        var tabContents = document.querySelectorAll(".tab-pane");
        tabContents.forEach(function (content) {
          content.classList.remove("show", "active");
        });
        tabs.forEach(function (tab) {
          tab.classList.remove("active");
        });
        var targetTabId = tab.getAttribute("href").substr(1);
        document
          .getElementById(targetTabId)
          .classList.add("show", "active");
        tab.classList.add("active");
      });
    });
  });