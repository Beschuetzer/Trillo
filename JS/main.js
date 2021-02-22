const userIcon = document.querySelector('.user-nav__user');
userIcon.addEventListener('click', userIconHandler);

function userIconHandler(e) {
    e.currentTarget?.children[e.currentTarget.children?.length -1].classList.toggle('hidden');
}
