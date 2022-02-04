
// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();
const notchValue =  document.querySelector(".notch__container p")
arr = [
  "Hello World 1",
  "Hellow World 2",
  "Hellow World 3",
  "Hellow World 4",
    "Hellow World 5",
    "Hello 6",
  "Hello 7"
];

const sec__array = [];

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