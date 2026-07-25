$(document).ready(function () {
  // Initialize Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  // Hide Loader after 1 second
  setTimeout(() => {
    $('#ftco-loader').addClass('hidden');
  }, 1000);

  // Typing Animation
  const typingAnimationElement = document.getElementById('typing-animation');
  const typingTexts = [  'Workday Adaptive Planning Developer', 'Data Analyst', 'Business Analyst','Power BI Developer','Software Engineer','Web Developer'];
  let textIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < typingTexts[textIndex].length) {
      typingAnimationElement.textContent += typingTexts[textIndex][charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingAnimationElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex + 1) % typingTexts.length;
      setTimeout(type, 500);
    }
  }

  type();

  // Smooth Scrolling for Navbar Links
  $('.nav-link').on('click', function (e) {
    e.preventDefault();
    const targetId = $(this).attr('href');
    const targetElement = $(targetId);

    if (targetElement.length) {
      const navbarHeight = $('#ftco-navbar').outerHeight() || 60; // Fallback to 60px if navbar height is not available
      const targetPosition = targetElement.offset().top - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Target element ${targetId} not found.`);
    }
  });

  // Scroll-Triggered Animations with GSAP
  gsap.utils.toArray('.glassmorphism, section').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Initialize Vanilla Tilt for 3D effects
  VanillaTilt.init(document.querySelectorAll('.tilt'), {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
  });

});




const btn = document.getElementById("toggleSkills");

btn.addEventListener("click", function () {

    const skills = document.querySelectorAll(".skill-extra");
    const expanded = btn.innerText === "Show Less";

    skills.forEach(skill => {
        if (expanded) {
            skill.classList.add("hidden");
            skill.classList.remove("flex");
        } else {
            skill.classList.remove("hidden");
            skill.classList.add("flex");
        }
    });

    btn.innerText = expanded ? "View All Skills" : "Show Less";

});

// ================= CONTACT MODAL =================

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");
const copyEmail = document.getElementById("copyEmail");

if (contactBtn && contactModal && closeModal) {

    contactBtn.addEventListener("click", () => {
        contactModal.classList.remove("hidden");
        contactModal.classList.add("flex");
    });

    closeModal.addEventListener("click", () => {
        contactModal.classList.add("hidden");
        contactModal.classList.remove("flex");
    });

    window.addEventListener("click", (e) => {
        if (e.target === contactModal) {
            contactModal.classList.add("hidden");
            contactModal.classList.remove("flex");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            contactModal.classList.add("hidden");
            contactModal.classList.remove("flex");
        }
    });

    if (copyEmail) {

        copyEmail.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText("gandevishnu2002@gmail.com");

                copyEmail.innerHTML =
                    '<i class="fas fa-check"></i> Email Copied!';

                setTimeout(() => {

                    copyEmail.innerHTML =
                        '<i class="fas fa-copy"></i> Copy Email Address';

                }, 2000);

            } catch (err) {

                alert("Unable to copy email.");

            }

        });

    }

}


