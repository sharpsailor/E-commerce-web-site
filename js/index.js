/*
=============
Navigation
=============
 */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.classList.add("active");
    navContainer.style.left = "0";
    navContainer.style.width = "30rem";
});

navClose.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.classList.remove("active");
    navContainer.style.left = "-30rem";
    navContainer.style.width = "30rem";
});
/*
=============
Fixed Navigation
=============
 */

const navBar = document.querySelector(".navigation");
const gotoTop = document.querySelector(".goto-top");

// Smooth Scroll
Array.from(scrollLink).map((link) => {
    link.addEventListener("click", (e) => {
        // Prevent Default
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navBar.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains("fix__nav");
        let position = element.offsetTop - navHeight;

        if (!fixNav) {
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        navContainer.style.left = "-30rem";
        document.body.classList.remove("active");
    });
});

// Fix NavBar

window.addEventListener("scroll", (e) => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix__nav");
    } else {
        navBar.classList.remove("fix__nav");
    }

    if (scrollHeight > 300) {
        gotoTop.classList.add("show-top");
    } else {
        gotoTop.classList.remove("show-top");
    }
});

function closelist() {
    var morelist = document.getElementById("more");
    var btn = document.getElementById("myBtn");
    btn.innerHTML = "Show More&nbsp;&nbsp;&#8595;";
    morelist.style.display = "none";
    btn.value = "False";
}

function myFunction() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (btnText.value === "True") {
        closelist();
    } else {
        btnText.innerHTML = "Show Less&nbsp;&nbsp;&#8593;";
        moreText.style.display = "block";
        btnText.value = "True";
    }

    //   if (moreText.style.display === "none") {
    //     btnText.innerHTML = "Show Less";
    //     moreText.style.display = "block";
    // } else {
    //     btnText.innerHTML = "Show More";
    //     moreText.style.display = "none";
    // }
}