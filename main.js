// Toggle menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Read more/less button
const readMoreBtns = document.querySelectorAll(".btn-read");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const postDetails = btn.previousElementSibling;
    const postText = postDetails.previousElementSibling;

    postDetails.classList.toggle("hide");
    btn.innerHTML = btn.innerHTML === "Read more" ? "Read less" : "Read more";
  });
});

// Project filter
const filters = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const filterValue = filter.dataset.filter;

    projectCards.forEach((card) => {
      if (card.dataset.category === filterValue || filterValue === "all") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Skills animation
const skillBars = document.querySelectorAll(".skill-progress div");

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  const screenBottom = window.innerHeight * 0.8;

  skillBars.forEach((skillBar) => {
    const barTop = skillBar.getBoundingClientRect().top;
    if (barTop < screenBottom) {
      skillBar.style.width = skillBar.dataset.progress;
    }
  });
}



// // Gestion du menu responsive
// const menuBtn = document.querySelector(".menu-btn");
// const nav = document.querySelector("nav");
// const navLinks = document.querySelectorAll("nav ul li a");

// let menuOpen = false;
// menuBtn.addEventListener("click", () => {
//   if (!menuOpen) {
//     menuBtn.classList.add("open");
//     nav.classList.add("open");
//     navLinks.forEach((link) => link.classList.add("open"));
//     menuOpen = true;
//   } else {
//     menuBtn.classList.remove("open");
//     nav.classList.remove("open");
//     navLinks.forEach((link) => link.classList.remove("open"));
//     menuOpen = false;
//   }
// });

// // Animation du texte de la section À propos
// const aboutText = document.querySelector(".about-text");
// const aboutTextContent = aboutText.textContent;
// const aboutTextWords = aboutTextContent.split(" ");
// aboutText.textContent = "";
// for (let i = 0; i < aboutTextWords.length; i++) {
//   const wordSpan = document.createElement("span");
//   wordSpan.textContent = aboutTextWords[i];
//   wordSpan.classList.add("word");
//   aboutText.append(wordSpan);
// }

// const words = document.querySelectorAll(".word");
// words.forEach((word) => {
//   word.addEventListener("mouseover", () => {
//     word.classList.add("active");
//   });

//   word.addEventListener("mouseout", () => {
//     word.classList.remove("active");
//   });
// });

// // Animation de la section Projets
// const projects = document.querySelectorAll(".project");

// projects.forEach((project) => {
//   project.addEventListener("mouseover", () => {
//     project.childNodes[1].classList.add("img-darken");
//     project.childNodes[3].classList.add("text-show");
//   });

//   project.addEventListener("mouseout", () => {
//     project.childNodes[1].classList.remove("img-darken");
//     project.childNodes[3].classList.remove("text-show");
//   });
// });

// // Validation du formulaire de contact
// const form = document.querySelector(".contact-form");
// const nameInput = document.querySelector(".name-input");
// const emailInput = document.querySelector(".email-input");
// const messageInput = document.querySelector(".message-input");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (nameInput.value.trim() === "") {
//     setErrorFor(nameInput, "Le champ Nom est requis");
//   } else {
//     setSuccessFor(nameInput);
//   }

//   if (emailInput.value.trim() === "") {
//     setErrorFor(emailInput, "Le champ Email est requis");
//   } else if (!isEmail(emailInput.value.trim())) {
//     setErrorFor(emailInput, "Veuillez entrer un email valide");
//   } else {
//     setSuccessFor(emailInput);
//   }

//   if (messageInput.value.trim() === "") {
//     setErrorFor(messageInput, "Le champ Message est requis");
//   } else {
//     setSuccessFor(messageInput);
//   }
// });

// function setErrorFor(input, message) {
//   const formGroup = input.parentElement;
//   const errorMsg = formGroup.querySelector(".error-message");
//   input.classList.add("error");
//   errorMsg.innerText = message;
// }

// function setSuccessFor(input) {
//   const formGroup = input.parentElement;
//   input.classList.remove("error");
// }

// function isEmail(email) {
//   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// }
  

// // Fonction pour animer l'affichage de la navbar
// function animateNavbar() {
//   const navbar = document.querySelector('header nav');
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });
// }

// // Fonction pour afficher/masquer le formulaire de contact
function toggleContactForm() {
    const contactForm = document.querySelector('#contact-form');
    const contactBtn = document.querySelector('#contact-btn');
    const closeBtn = document.querySelector('#close-btn');
  
    contactBtn.addEventListener('click', () => {
      contactForm.classList.add('show');
    });
  
    closeBtn.addEventListener('click', () => {
      contactForm.classList.remove('show');
    });
  }
  
  toggleContactForm();
  

// // Fonction pour animer le défilement vers les sections de la page
// function animateScroll() {
//   const navbar = document.querySelector('header nav');
//   const links = document.querySelectorAll('header nav ul li a');

//   links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();

//       const target = document.querySelector(e.target.hash);
//       const targetOffset = target.offsetTop;

//       window.scrollTo({
//         top: targetOffset - navbar.offsetHeight,
//         behavior: 'smooth'
//       });
//     });
//   });
// }

// // Fonction pour animer l'affichage des cartes de projet
// function animateProjectCards() {
//   const cards = document.querySelectorAll('.project-card');
//   cards.forEach((card) => {
//     card.addEventListener('mouseover', () => {
//       card.classList.add('hover');
//     });
//     card.addEventListener('mouseout', () => {
//       card.classList.remove('hover');
//     });
//   });
// }

// // Fonction pour animer l'affichage des articles de blog
// function animateBlogPosts() {
//   const posts = document.querySelectorAll('.blog-post');
//   posts.forEach((post) => {
//     post.addEventListener('mouseover', () => {
//       post.classList.add('hover');
//     });
//     post.addEventListener('mouseout', () => {
//       post.classList.remove('hover');
//     });
//   });
// }

// // Appel des différentes fonctions pour chaque page
// if (window.location.pathname === '/') {
//   animateNavbar();
//   animateScroll();
// }

// if (window.location.pathname === '/projects.html') {
//   animateNavbar();
//   animateProjectCards();
// }

// if (window.location.pathname === '/blog.html') {
//   animateNavbar();
//   animateBlogPosts();
// }

// if (window.location.pathname === '/contact.html') {
//   animateNavbar();
//   toggleContactForm();
// }
