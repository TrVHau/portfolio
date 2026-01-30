document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const skillBars = document.querySelectorAll(".skill-progress");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
}

const skillsSection = document.getElementById("skills");
if (skillsSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateSkillBars();
      }
    },
    { threshold: 0.3 },
  );
  observer.observe(skillsSection);
}

document.querySelectorAll(".stat-number").forEach((el) => {
  const target = parseInt(el.getAttribute("data-target"));
  el.textContent = target;
});

const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("visible", window.scrollY > 500);
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi tin nhắn!");
    contactForm.reset();
  });
}
