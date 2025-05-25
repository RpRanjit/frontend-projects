function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar =document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


const scrollRevealOptionbottom ={
    distance: "4rem",
    origin: "bottom",
    duration: 1300
};
const scrollRevealOptionleft ={
    distance: "4rem",
    origin: "left",
    duration: 1300,
};
const scrollRevealOptionright ={
    distance: "4rem",
    origin: "right",
    duration: 1300,
};

// for home content
ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOptionbottom,
});
ScrollReveal().reveal(".btn",{
    ...scrollRevealOptionleft,
    delay: 500,
});
//for second section
ScrollReveal().reveal(".paint-img",{
    ...scrollRevealOptionleft,
    delay: 800,
});
ScrollReveal().reveal(".second_contents span",{
    ...scrollRevealOptionright,
    delay: 1000,
});
ScrollReveal().reveal(".second_contents hr",{
    ...scrollRevealOptionright,
    delay: 1000,
});
ScrollReveal().reveal(".second_contents h1",{
    ...scrollRevealOptionright,
    delay: 1000,
});
ScrollReveal().reveal(".second_contents p",{
    ...scrollRevealOptionright,
    delay: 1000,
});
ScrollReveal().reveal(".second_contents button",{
    ...scrollRevealOptionbottom,
    delay: 1000,
});
// for fourth section
ScrollReveal().reveal(".full-desc",{
    ...scrollRevealOptionleft,
    delay: 1000,
});
ScrollReveal().reveal(".full-desc .first",{
    ...scrollRevealOptionleft,
    delay: 1300,
});
ScrollReveal().reveal(".full-desc .second",{
    ...scrollRevealOptionright,
    delay: 1300,
});
ScrollReveal().reveal(".pic-collection .first-colm",{
    ...scrollRevealOptionright,
    delay: 1500,
});
ScrollReveal().reveal(".pic-collection .second-colm",{
    ...scrollRevealOptionright,
    delay: 1800,
});
ScrollReveal().reveal(".pic-collection .third-colm",{
    ...scrollRevealOptionright,
    delay: 2100,
});

// for sixth section
ScrollReveal().reveal(".contact-desc",{
    ...scrollRevealOptionleft,
    delay: 1500,
});
ScrollReveal().reveal(".sculpt-img",{
    ...scrollRevealOptionleft,
    delay: 1500,
});

// for seventh section
ScrollReveal().reveal(".second-part img",{
    ...scrollRevealOptionleft,
    delay: 1000,
});
ScrollReveal().reveal(".second-part form",{
    ...scrollRevealOptionright,
    delay: 1100,
});