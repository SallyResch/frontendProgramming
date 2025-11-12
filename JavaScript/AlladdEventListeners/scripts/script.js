const mouseTab = document.querySelector('.tab .mouse')
const allTabs = document.querySelectorAll(".tab");
const allTabsArray = Array.from(allTabs);
const theBestevent = event => {
    console.log(`${event} is the best`)
}
allTabsArray.forEach(tab => tab.addEventListener("click", () => theBestevent(tab.textContent)))