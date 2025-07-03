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
  const typingTexts = ['Software Engineer', 'Data Analyst', 'Data Visualization Expert'];
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

  // Contact Form Submission (Placeholder)
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbw3LfvWxC4o3U9qg1OEjOWXV-_d8Syg76I7aQkIRqKEKrcavZewy7PAgGwmBVKyP73e/exec';

const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");
const button = form.querySelector("button");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {};
  inputs.forEach(input => {
    data[input.name] = input.value;
  });

  button.disabled = true;
  button.textContent = "Sending...";

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  alert("✅ Message sent successfully!");
    form.reset();
  } catch (err) {
    alert("❌ Error: " + err.message);
  } finally {
    button.disabled = false;
    button.textContent = "Send Message";
  }
});
