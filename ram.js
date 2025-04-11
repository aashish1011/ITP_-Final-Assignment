document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Greeting based on time of day
    const greetingElement = document.createElement('p');
    const hour = new Date().getHours();
    let greeting = '';
    const currentDate = new Date().toLocaleDateString();
  
    if (hour < 12) {
      greeting = 'Good Morning!';
    } else if (hour < 18) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }
  
    // Display greeting and current date
    greetingElement.textContent = `${greeting} Today is ${currentDate}`;
    document.querySelector('main').prepend(greetingElement);
  
    // Image Slider functionality with navigation controls
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider");
    const nextButton = document.querySelector("#next");
    const prevButton = document.querySelector("#prev");
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // Start the auto slide change every 3 seconds
    setInterval(nextSlide, 3000);
  
    // Button Clicks for Navigation
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    // Initially display the first slide
    showSlide(currentSlide);
  
    // Smooth Scroll for Navigation
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      });
    });
  
    // Scroll Animation: Fade in sections as you scroll
    const sections = document.querySelectorAll('section');
    
    function fadeInOnScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          section.classList.add('visible');
        }
      });
    }
  
    window.addEventListener('scroll', fadeInOnScroll);
  
    // Contact Form Validation
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
  
        let errors = [];
  
        if (!name.value.trim()) {
          errors.push("Name is required.");
        }
  
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.value.trim()) {
          errors.push("Email is required.");
        } else if (!emailRegex.test(email.value.trim())) {
          errors.push("Please enter a valid email address.");
        }
  
        if (!message.value.trim()) {
          errors.push("Message is required.");
        }
  
        if (errors.length > 0) {
          e.preventDefault();
          alert(errors.join("\n"));
        }
      });
    }
  });
  