"use strict";

class Project {
  mobileNavBtn = document.querySelector(".mobile-nav-btn");
  overlay = document.querySelector(".overlay");
  headerEl = document.querySelector(".header");

  constructor() {
    this.mobileNavBtn.addEventListener(
      "click",
      this.toggleMobileNav.bind(this)
    );
    this.overlay.addEventListener("click", this.toggleMobileNav.bind(this));
  }

  toggleMobileNav() {
    this.headerEl.classList.toggle("open-nav");
    this.overlay.classList.toggle("hidden");
  }
}

const app = new Project();
