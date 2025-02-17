/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== PRELOADER ====================*/
// let preloader = document.getElementById("loading");
// function preLoader() {
//   preloader.style.display = "none";
// }

// /*==================== FORM SUBMIT ====================*/
// document.getElementById("contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();

//   //button animation
//   document.getElementById("email-submit").innerText = "Sending...";

//   if (
//     document.getElementById("name").value != "" &&
//     document.getElementById("email").value != "" &&
//     document.getElementById("message").value != ""
//   ) {
//     let params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };

//     const serviceID = "service_embce24";
//     const templateID = "template_cci0niw";

//     emailjs
//       .send(serviceID, templateID, params)
//       .then((res) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";

//         document.getElementById("email-submit").innerHTML = `
//           Send message
//           <i class="uil uil-message button__icon"></i>`;

//         alert("Your message send susscessfully!");
//       })
//       .catch((err) => {
//         document.getElementById("email-submit").innerHTML = `
//           Send message
//           <i class="uil uil-message button__icon"></i>`;
//         console.log(err);
//       });
//   } else {
//     alert("Please fill out all the fields");
//   }
// });

/*==================== GITHUB CALENDAR ====================*/
// GitHubCalendar(".calendar", "sanajitjana", {
//   responsive: true,
//   global_stats: false,
//   tooltips: true,
// });

// $(".counting").each(function () {
//   var $this = $(this),
//     countTo = $this.attr("data-count");

//   $({ countNum: $this.text() }).animate(
//     {
//       countNum: countTo,
//     },
//     {
//       duration: 3000,
//       easing: "linear",
//       step: function () {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function () {
//         $this.text(this.countNum);
//       },
//     }
//   );
// });

const detailsButton = document.getElementById('detailsButton');
const responsibilitiesSection = document.getElementById('responsibilitiesSection');

let isDetailsVisible = false;

detailsButton.addEventListener('click', () => {
  console.log('click')
  isDetailsVisible = !isDetailsVisible;
  if (isDetailsVisible) {
    responsibilitiesSection.style.display = 'block';
  } else {
    responsibilitiesSection.style.display = 'none';
  }
});

const detailsButton2 = document.getElementById('detailsButton2');
const responsibilitiesSection2 = document.getElementById('responsibilitiesSection2');

let isDetailsVisible2 = false;

detailsButton2.addEventListener('click', () => {
  console.log('click2')
  isDetailsVisible2 = !isDetailsVisible2;
  if (isDetailsVisible2) {
    responsibilitiesSection2.style.display = 'block';
  } else {
    responsibilitiesSection2.style.display = 'none';
  }
});

const detailsButton3 = document.getElementById('detailsButton3');
const responsibilitiesSection3 = document.getElementById('responsibilitiesSection3');

let isDetailsVisible3 = false;

detailsButton3.addEventListener('click', () => {
  console.log('click3')
  isDetailsVisible3 = !isDetailsVisible3;
  if (isDetailsVisible3) {
    responsibilitiesSection3.style.display = 'block';
  } else {
    responsibilitiesSection3.style.display = 'none';
  }
});

const detailsButton4 = document.getElementById('detailsButton4');
const responsibilitiesSection4 = document.getElementById('responsibilitiesSection4');

let isDetailsVisible4 = false;

detailsButton4.addEventListener('click', () => {
  console.log('click4')
  isDetailsVisible4 = !isDetailsVisible4;
  if (isDetailsVisible4) {
    responsibilitiesSection4.style.display = 'block';
  } else {
    responsibilitiesSection4.style.display = 'none';
  }
});