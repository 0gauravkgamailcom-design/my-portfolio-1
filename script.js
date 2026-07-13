// ==========================
// Smooth Scrolling
// ==========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior:'smooth'

        });

    });

});

// ==========================
// Scroll Animation
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ==========================
// Typing Effect
// ==========================

const words=[
    "Front-End Web Developer",
    "Web Designer",
    "BCA Student",
    "UI Developer"
];

let wordIndex=0;
let charIndex=0;

const typing=document.getElementById("typing");

function type(){

    if(charIndex<words[wordIndex].length){

        typing.textContent+=words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex>0){

        typing.textContent=words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex>=words.length){

            wordIndex=0;

        }

        setTimeout(type,300);

    }

}

type();

// ==========================
// Navbar Active Link
// ==========================

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
