document.querySelectorAll('#nav-icon, #nav-link').forEach(element => {
    element.addEventListener("click", () => {
        const navIcon = document.getElementById('nav-icon');
        const menuDiv = document.getElementById('nav-menu');
        
        navIcon.classList.toggle('open');
        menuDiv.classList.toggle('open');
    });
});