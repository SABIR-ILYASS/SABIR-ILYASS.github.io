const scriptURL = 'https://script.google.com/macros/s/AKfycbxSNGDaBYX_UPTFALF3qhrK14Eb-_zMC1oQhgwIsv2Xm-I-BZnl6lU2_ks0WLfEWXIj/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully."
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

const projectElements = document.querySelectorAll('.proj');
let currentGroup = 0;

function showCurrentGroup() {
    // Hide all project elements
    projectElements.forEach(project => {
        project.style.display = 'none';
    });

    // Determine the number of elements to display based on screen width
    const screenWidth = window.innerWidth;
    let elementsToShow = 3; // Default to showing 3 elements

    if (screenWidth < 750) {
        elementsToShow = 1; // If screen width is less than 750px, show only 1 element
    }

    // Display the current group of projects
    for (let i = currentGroup; i < currentGroup + elementsToShow; i++) {
        const index = i % projectElements.length;
        projectElements[index].style.display = 'block';
    }
}

function showNextGroup() {
    currentGroup++;
    showCurrentGroup();
}

function showPreviousGroup() {
    currentGroup--;
    if (currentGroup < 0) {
        currentGroup = projectElements.length - 1;
    }
    showCurrentGroup();
}

showCurrentGroup();


var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}
        
var tablinks = document.getElementsByClassName('links');
var tabcontents = document.getElementsByClassName('tab-contents');
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// Books
const booksElements = document.querySelectorAll('.book');
let currentbook = 0;

function showCurrentbook() {
    // Hide all project elements
    booksElements.forEach(project => {
        project.style.display = 'none';
    });

    // Determine the number of elements to display based on screen width
    const screenWidth = window.innerWidth;
    let elementsToShow = 3; // Default to showing 3 elements

    if (screenWidth < 750) {
        elementsToShow = 1; // If screen width is less than 750px, show only 1 element
    }

    // Display the current book of projects
    for (let i = currentbook; i < currentbook + elementsToShow; i++) {
        const index = i % booksElements.length;
        booksElements[index].style.display = 'block';
    }
}

function showNextbook() {
    currentbook++;
    showCurrentbook();
}

function showPreviousbook() {
    currentbook--;
    if (currentbook < 0) {
        currentbook = booksElements.length - 1;
    }
    showCurrentbook();
}

showCurrentbook();

