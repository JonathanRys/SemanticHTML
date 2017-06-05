var menuOptions = document.querySelector('nav ul');

menuOptions.addEventListener('click', selectMenuOption);

function selectMenuOption(e) {
    document.querySelector('.current').className = document.querySelector('.current').className.replace(/[ ]*current[ ]*/);

    e.target.className += ' current';
}