/////////////

// SET CURRENT YEAR

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

//////////////


///////////////////////

// MOBILE NAVIGATION BUTTONS SCRIPTING

// Make mobile navigation work

const navButton = document.querySelector(".btn-mobile-nav");

navButton.addEventListener("click", toggleMobileNav);

// Close mobile navigation on navigate

const mainNavLinks = document.querySelectorAll(".main-nav-link:link");

mainNavLinks.forEach(function (link) {
  link.addEventListener("click", toggleMobileNav);
});

function toggleMobileNav() {
  const headerEle = document.querySelector(".header");
  const isNavOpen = headerEle.classList.toggle("nav-open");
  document.body.classList.toggle("disable-scroll", isNavOpen);
}

////////////////////////

///////////////////////////////
// Sticky navigation
//////////////////////////////

const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.querySelector('body').classList.add('sticky-nav');
  }
  if (ent.isIntersecting === true) {
    document.querySelector('body').classList.remove('sticky-nav');
  }
}, {
  // In the viewport
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});
obs.observe(sectionHeroEl);




//////////////////////////////

// // Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
