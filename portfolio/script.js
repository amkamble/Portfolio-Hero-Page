const profession = document.getElementById('profession');
const profList = ["Photographer", "Web Designer" , "Web Developer", "Video Editor"];
let currentIndex = 0;

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function toggleMenu(){
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle("active");
});


function changeProfession () {
    
    profession.style.opacity = 0;

    setTimeout (()=> {
        profession.textContent = profList[currentIndex]
        profession.style.opacity = 1;
        currentIndex = (currentIndex + 1) % profList.length;
    }, 500);
}

profession.textContent = profList[currentIndex];
profession.style.opacity = 1;

setInterval (changeProfession, 3000);