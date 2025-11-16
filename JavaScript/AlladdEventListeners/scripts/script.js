const allTabs = document.querySelectorAll(".tab");
const allEvents = document.querySelectorAll(".event");
const mainContent = document.querySelector(".main-content-section");

function hideEventTabs() {
  allEvents.forEach(event => event.classList.remove("show"));
}

function showEventTab(category) {
  const eventToShow = document.querySelector(`.event.${category}`);
  if (eventToShow) {
    eventToShow.classList.add("show");
  }
}

function removeActiveClasses() {
  allTabs.forEach(tab => tab.classList.remove("active"));
}

function showMainContent() {
  mainContent.classList.add("show");
}

function hideMainContent() {
  mainContent.classList.remove("show");
}

function goToStartState() {
  hideEventTabs();
  removeActiveClasses();
  showMainContent();
}

goToStartState();


allTabs.forEach(tab => {
  tab.addEventListener("click", () => {

    if (tab.classList.contains("active")) {
      goToStartState();
      return;
    }

    hideEventTabs();
    hideMainContent();
    removeActiveClasses();
    tab.classList.add("active");

    const classes = Array.from(tab.classList);
    const category = classes.find(c => c !== "tab" && c !== "active");

    showEventTab(category);
  });
});

