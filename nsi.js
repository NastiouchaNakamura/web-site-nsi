// Pour le header
function toggle_nav() {
    let nav = document.getElementById('navigation');
    let curtain = document.getElementById('curtain');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        curtain.classList.remove('active');
    }
    else {
        nav.classList.add('active');
        curtain.classList.add('active');
    }
}

function quit_nav() {
    let nav = document.getElementById('navigation');
    let curtain = document.getElementById('curtain');
    nav.classList.remove('active');
    curtain.classList.remove('active');
}
