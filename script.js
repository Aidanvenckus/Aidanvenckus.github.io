

//Importing the 2 elements
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//On click of toggle button run a function listed underneath
toggleButton.addEventListener('click', () => {
    //if there is an active then remove it and if there isnt one then add it
    navbarLinks.classList.toggle('active')
})