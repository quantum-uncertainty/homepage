(function setupCollapsibleTimelines() {
  let collapseButtons = document.getElementsByClassName('collapse-button');
  for (let button of collapseButtons) {
      button.addEventListener("click", function onClick() {
          let icon = this.children[1];
          icon.classList.toggle("fa-angle-right");
          icon.classList.toggle("fa-angle-down");
          let timeline = this.nextElementSibling;
          timeline.classList.toggle("collapsed");
          timeline.classList.toggle("expanded");
      });
  }
})();

(function setUpScrollToTop() {
  let button = document.getElementById("scroll-to-top");
  button.onclick = function scrollToTop() {
      let article = document.getElementsByTagName("article")[0];
      article.scrollIntoView({behavior: "smooth"});
  }
  window.onscroll = function toggleScrollButton() {
      if (window.pageYOffset >= 250) {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  }
})();