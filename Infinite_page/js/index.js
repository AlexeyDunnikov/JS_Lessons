const mainEl = document.querySelector(".main");
const body = document.querySelector("body");

const dateTemplate = document.querySelector(".date-template");

function addDates() {
  const dateEl = document.createElement("div");
  const nowDate = new Date();
  dateEl.innerHTML = `Day: ${nowDate}`;

  mainEl.append(dateEl);
}

while (document.documentElement.clientHeight * 2 > body.scrollHeight) {
  addDates();
}

window.addEventListener("scroll", (evt) => {
  let scrollToBottom =
    body.scrollHeight -
    window.pageYOffset -
    document.documentElement.clientHeight;

  if (scrollToBottom < 100) {
    addDates();
  }
});
