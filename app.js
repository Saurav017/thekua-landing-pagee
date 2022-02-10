const ctaLink = document.querySelector('.hero__cta__link');
const ctaLink2 = document.querySelector('.cta__link');
const modal = document.querySelector('.model');
const closeButton = document.querySelector('.modal__close');


// Modal Section

function showModal() {
  modal.style.display = 'block';

}

function windowOnClick(event) {
  if (event.target === modal) {
    showModal();
  }

}

function hideModal() {
  modal.style.display = 'none';
}

ctaLink.addEventListener('click', showModal);
ctaLink2.addEventListener('click', showModal);
window.addEventListener('click', windowOnClick);
closeButton.addEventListener('click', hideModal);






// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();
const notchValue =  document.querySelector(".notch__container p")



// changing notch content on every section

const sections = document.querySelectorAll("section");

window.onscroll = () => {
    var current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop)
            current = section.getAttribute("id");
        
    });

    switch (current) {
      case "hero__section":
        notchValue.innerHTML =
          "thekua is a india dish, mostly famous in Bihar and Jharkhand.";
        break;

      case "article__section":
        notchValue.innerHTML = "See our latest blogs right here";
        break;

      case "story__telling__section":
        notchValue.innerHTML = "Stories are the equipments of the living.";
        break;

      case "features__section":
        notchValue.innerHTML = "Features Section";
        break;

      case "services__section":
        notchValue.innerHTML = "What we do?";
        break;

      case "testimonial__section":
        notchValue.innerHTML = "See what out clients have to say about us.";
            break;
        
        case "cta__section":
            notchValue.innerHTML = "Wanna collab? Come let's have a chat.";
            break;
            
        default:
            notchValue.innerHTML =
              "thekua is a india dish, mostly famous in Bihar and Jharkhand.";
            break;
    }
}




// button

let submitButton = document.querySelector('.submit__btn');

// form validation
const userName = document.querySelector('.name__input');
const email = document.querySelector('.email__input');  
let form = document.querySelector('form');


form.addEventListener("submit", (e) => {


    alert("Thank you for your message. I will get back to you soon.");
      
      // submitButton.classList.toggle("active");
      // setTimeout(() => {
      //   submitButton.classList.remove("active");
      //   form.reset();
      // }, 4000);
  
  });

// ********************************************************************

// only one checklist selected
$('input[type="checkbox"]').on("change", function () {
  $('input[type="checkbox"]').not(this).prop("checked", false);
});