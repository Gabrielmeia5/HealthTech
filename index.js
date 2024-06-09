const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showRtoL");
    } else {
      entry.target.classList.remove("showRtoL");
    }
  });
});

const elements = document.querySelectorAll(".hiddenRtoL");
elements.forEach((element) => myObserver.observe(element));

const myObserver2 = new IntersectionObserver((e) => {
  e.forEach((ev) => {
    if (ev.isIntersecting) {
      ev.target.classList.add("showLtoR");
    } else {
      ev.target.classList.remove("showLtoR");
    }
  });
});

const elements2 = document.querySelectorAll(".hiddenLtoR");
elements2.forEach((element) => myObserver2.observe(element));

const myObserver3 = new IntersectionObserver((e) => {
  e.forEach((ev) => {
    if (ev.isIntersecting) {
      ev.target.classList.add("showBtoT");
    } else {
      ev.target.classList.remove("showBtoT");
    }
  });
});

const elements3 = document.querySelectorAll(".hiddenBtoT");
elements3.forEach((element3) => myObserver3.observe(element3));

const myObserver4 = new IntersectionObserver((e) => {
  e.forEach((ev) => {
    if (ev.isIntersecting) {
      ev.target.classList.add("showTtoB");
    } else {
      ev.target.classList.remove("showTtoB");
    }
  });
});

const elements4 = document.querySelectorAll(".hiddenTtoB");
elements4.forEach((element4) => myObserver4.observe(element4));
