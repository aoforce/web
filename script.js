document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach((section) => {
            const sectionPos = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionPos < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
