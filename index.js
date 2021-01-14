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