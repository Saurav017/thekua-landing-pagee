
// Copyright year
document.getElementById("year").innerHTML = new Date().getFullYear();

// changing notch content on every section

const sections = document.querySelectorAll("section");

window.onscroll = () => {
    var current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    

};